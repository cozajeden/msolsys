"""Pydantic models for the contact endpoint."""
from __future__ import annotations

from typing import Literal, Optional

from pydantic import BaseModel, EmailStr, Field, field_validator


PackageChoice = Literal["Starter", "Professional", "Enterprise", "Nie wiem jeszcze"]
LocationsChoice = Literal["1-5", "6-15", "16-50", "50+"]


class ContactRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    company: Optional[str] = Field(default=None, max_length=160)
    phone: Optional[str] = Field(default=None, max_length=40)
    package: Optional[PackageChoice] = None
    locations: Optional[LocationsChoice] = None
    message: str = Field(..., min_length=5, max_length=4000)
    rodo: bool

    # Honeypot — real users leave this blank; bots fill every field.
    website: Optional[str] = Field(default=None, max_length=200)

    @field_validator("rodo")
    @classmethod
    def must_accept_rodo(cls, v: bool) -> bool:
        if not v:
            raise ValueError("Zgoda RODO jest wymagana.")
        return v

    @field_validator("name", "message")
    @classmethod
    def strip_whitespace(cls, v: str) -> str:
        return v.strip()


class ContactResponse(BaseModel):
    ok: bool
    message: str
