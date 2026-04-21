import { hero } from "../content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper">
      <div className="max-w-container mx-auto px-8 pt-20 pb-24 relative">
        <div className="flex items-center gap-3 mb-10">
          <span className="eyebrow text-ink-soft">{hero.eyebrowLeft}</span>
          <div className="rule flex-1" />
          <span className="eyebrow text-ink-soft">{hero.eyebrowRight}</span>
        </div>

        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="h-display text-[clamp(56px,9vw,140px)]">
              {hero.titleLine1} <br />
              <span className="text-accent-dark">{hero.titleAccent}</span>
              <br />
              {hero.titleLine2}
            </h1>
            <p className="mt-8 max-w-[620px] text-[17px] leading-[1.55] text-ink-soft">{hero.lead}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#kontakt" className="btn-primary">
                {hero.ctaPrimary} <span>→</span>
              </a>
              <a href="#moduly" className="btn-ghost">
                {hero.ctaSecondary}
              </a>
              <span className="ml-2 flex items-center gap-2 text-[12px] font-mono text-ink-soft">
                <span className="dot" /> {hero.trialNote}
              </span>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="paper-card p-5">
              <div className="flex items-center justify-between">
                <span className="micro text-[11px] text-ink-soft">{hero.statusCard.label}</span>
                <span className="micro text-[11px] accent-pill px-2 py-0.5">{hero.statusCard.status}</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {hero.statusCard.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display font-bold text-[34px] leading-none">{s.value}</div>
                    <div className="text-[11px] font-mono text-ink-soft">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="rule my-5" />
              <div className="micro text-[10px] text-ink-soft">{hero.statusCard.footer}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-ink text-paper">
        <div className="max-w-container mx-auto px-8 py-4 flex items-center gap-6 overflow-hidden">
          <span className="micro text-[11px] text-accent">Obsługiwane procesy</span>
          <div className="flex-1 overflow-hidden">
            <div className="marquee-track flex gap-10 whitespace-nowrap micro text-[13px]">
              {[...hero.marquee, ...hero.marquee].map((x, i) => (
                <span key={i}>— {x}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
