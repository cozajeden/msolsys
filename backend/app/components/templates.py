"""Email rendering — Jinja2 HTML + plain-text fallback.

Keep templates inline (not on disk) so the whole backend is easy to deploy.
"""
from __future__ import annotations

from datetime import datetime
from html import escape
from typing import Tuple

from .schemas import ContactRequest


_TEAM_TEXT = """\
Nowe zapytanie z formularza kontaktowego MSS
===========================================

Data:      {ts}
Imię:      {name}
Firma:     {company}
E-mail:    {email}
Telefon:   {phone}
Pakiet:    {package}
Lokalizacje: {locations}

Wiadomość:
----------
{message}

---
Odpowiadaj bezpośrednio na tego maila — Reply-To jest ustawione na klienta.
"""


_TEAM_HTML = """\
<!doctype html>
<html>
<body style="margin:0;padding:0;background:#efece4;font-family:Inter,Arial,sans-serif;color:#141414;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#efece4;padding:24px 0;">
  <tr><td align="center">
    <table width="640" cellpadding="0" cellspacing="0"
      style="background:#fff;border:1px solid #d1cabb;">
      <tr><td style="background:#141414;padding:18px 24px;">
        <div style="color:#4fb0b0;font-weight:700;letter-spacing:.2em;font-size:11px;text-transform:uppercase;">MSS · Formularz kontaktowy</div>
        <div style="color:#fff;font-size:22px;font-weight:700;margin-top:6px;">Nowe zapytanie</div>
      </td></tr>
      <tr><td style="padding:24px;">
        <p style="margin:0 0 18px 0;font-size:14px;color:#4a4744;">Wiadomość z msolsys.com, {ts}.</p>
        <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;border-top:1px solid #d1cabb;">
          {rows}
        </table>
        <h3 style="margin:24px 0 8px 0;font-size:13px;letter-spacing:.15em;text-transform:uppercase;color:#2e8a8a;">Wiadomość</h3>
        <div style="white-space:pre-wrap;line-height:1.55;background:#f7f4ec;border:1px solid #e4e0d4;padding:16px;">{message}</div>
      </td></tr>
      <tr><td style="padding:16px 24px;background:#f7f4ec;border-top:1px solid #d1cabb;font-size:11px;color:#4a4744;">
        Odpowiadaj bezpośrednio na tego maila — Reply-To jest ustawione na klienta.
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>
"""


def _row(label: str, value: str) -> str:
    if not value:
        return ""
    return (
        f"<tr><td style='padding:10px 0;border-bottom:1px solid #e4e0d4;width:130px;"
        f"font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:#4a4744;'>{escape(label)}</td>"
        f"<td style='padding:10px 0;border-bottom:1px solid #e4e0d4;color:#141414;'>{escape(value)}</td></tr>"
    )


def render_team_email(data: ContactRequest) -> Tuple[str, str]:
    ts = datetime.now().strftime("%Y-%m-%d %H:%M")
    ctx = {
        "ts": ts,
        "name": data.name,
        "email": str(data.email),
        "company": data.company or "—",
        "phone": data.phone or "—",
        "package": data.package or "—",
        "locations": data.locations or "—",
        "message": data.message,
    }
    text = _TEAM_TEXT.format(**ctx)

    rows = "".join(
        [
            _row("Imię", ctx["name"]),
            _row("Firma", ctx["company"]),
            _row("E-mail", ctx["email"]),
            _row("Telefon", ctx["phone"]),
            _row("Pakiet", ctx["package"]),
            _row("Lokalizacje", ctx["locations"]),
        ]
    )
    html = _TEAM_HTML.format(
        ts=escape(ts),
        rows=rows,
        message=escape(data.message),
    )
    return text, html


_CONF_TEXT = """\
Cześć {name},

dziękujemy za wiadomość do MSS. Odezwiemy się w ciągu 1 dnia roboczego
(pn–pt, 08:00–17:00).

W razie pilnej sprawy:
  +48 697 081 610
  kontakt@msolsys.com

Pozdrawiamy,
Zespół MSS — Management Solutions System
"""

_CONF_HTML = """\
<!doctype html>
<html><body style="margin:0;padding:0;background:#efece4;font-family:Inter,Arial,sans-serif;color:#141414;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#efece4;padding:24px 0;"><tr><td align="center">
  <table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border:1px solid #d1cabb;">
    <tr><td style="padding:28px 28px 6px 28px;">
      <div style="color:#2e8a8a;font-weight:700;letter-spacing:.2em;font-size:11px;text-transform:uppercase;">MSS · Potwierdzenie</div>
      <h1 style="margin:14px 0 8px 0;font-size:28px;line-height:1.15;">Dziękujemy, {name}.</h1>
      <p style="font-size:15px;color:#4a4744;line-height:1.55;">Twoja wiadomość dotarła do trzyosobowego zespołu MSS. Odezwiemy się w ciągu <strong>1 dnia roboczego</strong> (pn–pt, 08:00–17:00).</p>
    </td></tr>
    <tr><td style="padding:0 28px 24px 28px;">
      <div style="border-top:1px solid #d1cabb;padding-top:16px;font-size:13px;color:#4a4744;">
        W razie pilnej sprawy:<br/>
        ☎ <a href="tel:+48697081610" style="color:#141414;">+48 697 081 610</a><br/>
        @ <a href="mailto:kontakt@msolsys.com" style="color:#141414;">kontakt@msolsys.com</a>
      </div>
    </td></tr>
    <tr><td style="background:#141414;color:#efece4;padding:14px 28px;font-size:11px;letter-spacing:.15em;text-transform:uppercase;">MSS — Management Solutions System</td></tr>
  </table>
</td></tr></table>
</body></html>
"""


def render_confirmation_email(data: ContactRequest) -> Tuple[str, str]:
    text = _CONF_TEXT.format(name=data.name)
    html = _CONF_HTML.format(name=escape(data.name))
    return text, html
