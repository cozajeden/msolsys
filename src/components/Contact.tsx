import { useState, type FormEvent } from "react";
import { brand, contact } from "../content";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "ok"; msg: string } | { kind: "err"; msg: string };

export function Contact() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || "") || undefined,
      phone: String(fd.get("phone") || "") || undefined,
      package: (String(fd.get("package") || "") || undefined) as any,
      locations: (String(fd.get("locations") || "") || undefined) as any,
      message: String(fd.get("message") || ""),
      rodo: fd.get("rodo") === "on",
      website: String(fd.get("website") || ""), // honeypot
    };

    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await res.json().catch(() => ({ message: "Błąd sieci." }));
      if (!res.ok) {
        setStatus({ kind: "err", msg: body.message || "Nie udało się wysłać." });
        return;
      }
      setStatus({ kind: "ok", msg: body.message });
      form.reset();
    } catch {
      setStatus({ kind: "err", msg: "Brak połączenia. Spróbuj ponownie." });
    }
  }

  return (
    <section id="kontakt" className="relative bg-ink text-paper">
      <div className="max-w-container mx-auto px-8 py-24 grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-5">
          <span className="font-display text-[12px] tracking-[0.22em] uppercase text-accent">
            {contact.sectionNum}
          </span>
          <h2 className="h-display text-[52px] md:text-[72px] mt-3 !leading-[0.95]">
            {contact.headline.map((l, i) => (
              <span key={i}>{l}<br /></span>
            ))}
          </h2>
          <p className="mt-6 text-[15px] leading-[1.6] text-[#b7b3aa]">{contact.lead}</p>
          <div className="mt-10 space-y-4">
            <Line icon="☎" label="Telefon" value={brand.phone} href={`tel:${brand.phone.replace(/\s/g, "")}`} />
            <Line icon="@" label="E-mail" value={brand.email} href={`mailto:${brand.email}`} />
            <Line icon="⏱" label="Godziny" value={brand.hours} />
          </div>
        </div>

        <div className="col-span-12 md:col-span-7">
          <form
            onSubmit={onSubmit}
            className="paper-card p-8 bg-paper text-ink !border-0"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="micro text-[11px] text-ink-soft">Formularz kontaktowy</span>
              <span className="micro text-[11px] text-ink-soft">Obowiązkowe: *</span>
            </div>

            {/* Honeypot — invisible to humans. */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 field">
              <div><label>Imię i nazwisko *</label><input required name="name" autoComplete="name" placeholder="Jan Kowalski" /></div>
              <div><label>Firma</label><input name="company" autoComplete="organization" placeholder="FM Services sp. z o.o." /></div>
              <div><label>E-mail *</label><input required type="email" name="email" autoComplete="email" placeholder="jan@firma.pl" /></div>
              <div><label>Telefon</label><input name="phone" autoComplete="tel" placeholder="+48 ..." /></div>
              <div className="md:col-span-2"><label>Pakiet, który Cię interesuje</label>
                <select name="package" defaultValue="">
                  <option value="">— wybierz —</option>
                  <option>Starter</option><option>Professional</option>
                  <option>Enterprise</option><option>Nie wiem jeszcze</option>
                </select>
              </div>
              <div className="md:col-span-2"><label>Liczba lokalizacji</label>
                <select name="locations" defaultValue="">
                  <option value="">— wybierz —</option>
                  <option value="1-5">1–5</option>
                  <option value="6-15">6–15</option>
                  <option value="16-50">16–50</option>
                  <option value="50+">50+</option>
                </select>
              </div>
              <div className="md:col-span-2"><label>Wiadomość *</label>
                <textarea required name="message" placeholder="W czym możemy pomóc? (np. chcemy zobaczyć moduł ofert w akcji)" />
              </div>
            </div>

            <label className="flex gap-3 mt-6 text-[12px] items-start text-ink-soft">
              <input required type="checkbox" name="rodo" className="mt-1" />
              <span>{contact.rodoLabel}</span>
            </label>

            <div className="mt-8 flex items-center justify-between gap-6 flex-wrap">
              <div className="text-[11px] font-mono text-ink-soft">
                Wiadomość trafia do: <span className="font-bold text-ink">{contact.recipientsNote}</span>
              </div>
              <button
                type="submit"
                className="btn-primary disabled:opacity-60"
                disabled={status.kind === "sending"}
              >
                {status.kind === "sending" ? "Wysyłanie…" : contact.submitLabel} <span>→</span>
              </button>
            </div>

            {status.kind !== "idle" && status.kind !== "sending" && (
              <div
                className="mt-4 text-[13px] font-mono"
                style={{ color: status.kind === "ok" ? "var(--accent-dark)" : "#c04848" }}
              >
                {status.kind === "ok" ? "✓ " : "✕ "}
                {status.msg}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Line({ icon, label, value, href }: { icon: string; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="w-9 h-9 inline-flex items-center justify-center font-display font-bold text-[20px] bg-accent text-ink">
        {icon}
      </div>
      <div>
        <div className="micro text-[10px] text-[#8a8680]">{label}</div>
        <div className="font-display text-[22px]">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
