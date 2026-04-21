import { packages } from "../content";

export function Packages() {
  return (
    <section id="pakiety" className="relative bg-paper">
      <div className="max-w-container mx-auto px-8 py-24">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-display text-[12px] tracking-[0.22em] uppercase text-accent-dark">
            {packages.sectionNum}
          </span>
          <div className="rule flex-1" />
          <span className="eyebrow text-ink-soft">{packages.note}</span>
        </div>
        <h2 className="h-display text-[52px] md:text-[72px] mb-12">
          {packages.headline.map((l, i) => (
            <span key={i}>{l}<br /></span>
          ))}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-[1px] bg-paper-line">
          {packages.tiers.map((t) => (
            <div
              key={t.name}
              className={`p-8 relative ${t.featured ? "bg-ink text-paper" : "bg-paper"}`}
            >
              {t.featured && (
                <div className="absolute top-4 right-4 accent-pill micro text-[10px] px-2 py-1">
                  Polecany
                </div>
              )}
              <div className="flex items-center justify-between">
                <h3 className="h-display text-[32px]">{t.name}</h3>
                <span className={`micro text-[10px] ${t.featured ? "text-[#8a8680]" : "text-ink-soft"}`}>
                  {t.subtitle}
                </span>
              </div>
              <div className="mt-8 flex items-baseline gap-2">
                <span
                  className="font-display font-bold text-[64px] leading-none"
                  style={t.featured ? { color: "var(--accent)" } : undefined}
                >
                  {t.price}
                </span>
                {t.priceUnit && (
                  <span className={`micro text-[11px] ${t.featured ? "text-[#8a8680]" : "text-ink-soft"}`}>
                    {t.priceUnit}
                  </span>
                )}
              </div>
              {t.yearlyNote && (
                <p className={`mt-2 text-[12px] font-mono ${t.featured ? "text-[#8a8680]" : "text-ink-soft"}`}>
                  {t.yearlyNote}
                </p>
              )}
              <div className={`rule my-6 ${t.featured ? "!bg-[#2a2a2a]" : ""}`} />
              <ul className={`space-y-2 text-[13px] ${t.featured ? "text-[#d0ccc3]" : "text-ink-soft"}`}>
                {t.bullets.map((b, i) => (
                  <li key={i}>{b ? `· ${b}` : "\u00A0"}</li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className={`w-full justify-center mt-8 ${
                  t.featured ? "btn-primary !bg-accent !text-ink" : "btn-ghost"
                }`}
              >
                {t.ctaLabel}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-[12px] font-mono text-ink-soft">
          {packages.footnotes.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="dot mt-1.5" />
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
