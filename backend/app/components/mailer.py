"""Async SMTP mailer. Sends one multi-recipient mail to the team and an
optional confirmation to the sender."""
from __future__ import annotations

import logging
from email.message import EmailMessage
from email.utils import formatdate
from typing import Iterable

import aiosmtplib

from .config import settings
from .schemas import ContactRequest
from .templates import render_team_email, render_confirmation_email

log = logging.getLogger(__name__)


def _build_message(
    *, subject: str, to: Iterable[str], reply_to: str | None, text: str, html: str
) -> EmailMessage:
    msg = EmailMessage()
    msg["From"] = f"{settings.from_name} <{settings.from_email}>"
    msg["To"] = ", ".join(to)
    msg["Date"] = formatdate(localtime=True)
    msg["Subject"] = subject
    if reply_to:
        msg["Reply-To"] = reply_to
    msg.set_content(text)
    msg.add_alternative(html, subtype="html")
    return msg


async def _send(msg: EmailMessage) -> None:
    await aiosmtplib.send(
        msg,
        hostname=settings.smtp_host,
        port=settings.smtp_port,
        username=settings.smtp_user or None,
        password=settings.smtp_password or None,
        start_tls=settings.smtp_starttls,
        timeout=20,
    )


async def send_contact_emails(data: ContactRequest) -> None:
    """Fan out: 1 mail to the team, 1 optional confirmation to the sender."""
    if not settings.recipients:
        raise RuntimeError("CONTACT_RECIPIENTS is empty — check .env")

    team_subject = f"[MSS] Nowe zapytanie: {data.name}" + (
        f" · {data.company}" if data.company else ""
    )
    text, html = render_team_email(data)
    team_msg = _build_message(
        subject=team_subject,
        to=settings.recipients,
        reply_to=str(data.email),
        text=text,
        html=html,
    )
    await _send(team_msg)
    log.info("Team mail sent to %d recipients", len(settings.recipients))

    if settings.send_confirmation:
        ctext, chtml = render_confirmation_email(data)
        confirm_msg = _build_message(
            subject="Otrzymaliśmy Twoje zapytanie — MSS",
            to=[str(data.email)],
            reply_to=None,
            text=ctext,
            html=chtml,
        )
        try:
            await _send(confirm_msg)
            log.info("Confirmation mail sent to %s", data.email)
        except Exception:
            # Never fail the request because of confirmation delivery.
            log.exception("Confirmation mail failed — ignoring")
