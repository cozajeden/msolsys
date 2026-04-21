import { features } from "../content";

export function Features() {
  return (
    <section className="relative bg-paper">
      <div className="max-w-container mx-auto px-8 py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="font-display text-[12px] tracking-[0.22em] uppercase text-accent-dark">
              {features.sectionNum}
            </span>
            <h2 className="h-display text-[44px] md:text-[60px] mt-3">
              {features.headline.map((l, i) => (
                <span key={i}>{l}<br /></span>
              ))}
            </h2>
          </div>
          <a href="#kontakt" className="micro text-[12px] hidden md:inline-flex items-center gap-2">
            Pełna lista funkcji <span>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.items.map((f) => (
            <div
              key={f.number}
              className={`paper-card p-7 relative ${f.highlight ? "!bg-paper-soft" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className="accent-pill micro text-[10px] px-2 py-1">{f.number}</span>
                <span className="micro text-[10px] text-ink-soft">{f.tag}</span>
              </div>
              <h3 className="font-display font-bold text-[28px] mt-5 leading-[1.05]">{f.title}</h3>
              <ul className="mt-5 space-y-2 text-[13px] text-ink-soft">
                {f.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="dot mt-1.5" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
