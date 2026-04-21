"""Load environment-driven config once at import."""
from __future__ import annotations

import os
from dataclasses import dataclass, field
from typing import List


def _bool(v: str | None, default: bool = False) -> bool:
    if v is None:
        return default
    return v.strip().lower() in {"1", "true", "yes", "on"}


def _list(v: str | None) -> List[str]:
    if not v:
        return []
    return [x.strip() for x in v.split(",") if x.strip()]


@dataclass(frozen=True)
class Settings:
    smtp_host: str = os.getenv("SMTP_HOST", "localhost")
    smtp_port: int = int(os.getenv("SMTP_PORT", "587"))
    smtp_user: str = os.getenv("SMTP_USER", "")
    smtp_password: str = os.getenv("SMTP_PASSWORD", "")
    smtp_starttls: bool = _bool(os.getenv("SMTP_STARTTLS"), True)

    from_name: str = os.getenv("SMTP_FROM_NAME", "MSS Contact Form")
    from_email: str = os.getenv("SMTP_FROM_EMAIL", "noreply@msolsys.com")

    recipients: List[str] = field(
        default_factory=lambda: _list(os.getenv("CONTACT_RECIPIENTS"))
    )
    send_confirmation: bool = _bool(os.getenv("SEND_CONFIRMATION"), True)

    cors_origins: List[str] = field(
        default_factory=lambda: _list(os.getenv("CORS_ORIGINS"))
    )
    rate_limit: str = os.getenv("RATE_LIMIT", "5/hour")


settings = Settings()
