import { problem } from "../content";

export function Problem() {
  return (
    <section id="produkt" className="relative bg-paper">
      <div className="max-w-container mx-auto px-8 py-24 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <span className="font-display text-[12px] tracking-[0.22em] uppercase text-accent-dark">{problem.sectionNum}</span>
          <h2 className="h-display text-[52px] md:text-[72px] mt-4">
            {problem.headline.map((l, i) => (
              <span key={i}>
                {l}
                <br />
              </span>
            ))}
          </h2>
          <p className="mt-6 text-[15px] leading-[1.6] text-ink-soft">{problem.lead}</p>
        </div>
        <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-[1px] bg-paper-line">
          {problem.tiles.map((t, i) => (
            <div key={i} className="paper-card p-7 !border-0">
              <div className="micro text-[11px] text-accent-dark">{t.state}</div>
              <h3 className="font-display font-bold text-[26px] mt-2">{t.title}</h3>
              <p className="text-[14px] mt-3 leading-[1.55] text-ink-soft">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
