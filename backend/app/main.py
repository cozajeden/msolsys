"""FastAPI entrypoint for the MSS marketing site contact form.

Run locally:

    cd code/backend
    python -m venv .venv && source .venv/bin/activate
    pip install -r requirements.txt
    cp .env.example .env       # fill in SMTP creds
    uvicorn app.main:app --reload --port 8000
"""
import logging

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from slowapi.util import get_remote_address

from components.config import settings
from components.mailer import send_contact_emails
from components.schemas import ContactRequest, ContactResponse

logging.basicConfig(level=logging.DEBUG, format="%(asctime)s %(levelname)s %(name)s: %(message)s")
log = logging.getLogger("mss")

limiter = Limiter(key_func=get_remote_address)
app = FastAPI(title="MSS Marketing API", version="1.0.0")
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins or ["*"],
    allow_methods=["POST", "GET", "OPTIONS"],
    allow_headers=["*"],
    allow_credentials=False,
)


@app.get("/api/health")
async def health() -> dict:
    return {"ok": True, "service": "mss-marketing-api"}


@app.post("/api/contact", response_model=ContactResponse)
@limiter.limit(settings.rate_limit)
async def contact(request: Request, payload: ContactRequest) -> ContactResponse:
    # Honeypot: if `website` is filled, silently succeed.
    if payload.website:
        log.info("Honeypot trigger from %s — dropping.", get_remote_address(request))
        return ContactResponse(ok=True, message="Dziękujemy.")

    try:
        await send_contact_emails(payload)
    except Exception:
        log.exception("Contact send failed")
        # Don't leak SMTP internals to the client.
        return JSONResponse(
            status_code=502,
            content={"ok": False, "message": "Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz na kontakt@msolsys.com."},
        )

    return ContactResponse(
        ok=True,
        message="Dziękujemy. Wiadomość trafiła do zespołu. Odezwiemy się w ciągu 1 dnia roboczego.",
    )
