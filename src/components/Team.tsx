import { team } from "../content";

export function Team() {
  return (
    <section id="zespol" className="relative bg-paper-soft">
      <div className="max-w-container mx-auto px-8 py-24 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-5">
          <span className="font-display text-[12px] tracking-[0.22em] uppercase text-accent-dark">
            {team.sectionNum}
          </span>
          <h2 className="h-display text-[52px] md:text-[72px] mt-3 !leading-[0.95]">
            {team.headline.map((l, i) => (
              <span key={i}>{l}<br /></span>
            ))}
          </h2>
          <p className="mt-6 text-[15px] leading-[1.6] text-ink-soft">{team.lead}</p>
          <div className="mt-10 rule" />
          <div className="mt-6 grid grid-cols-2 gap-4 text-[13px] text-ink-soft">
            <div><span className="micro text-[10px] text-ink">Lokalizacja</span><br />Poznań, PL</div>
            <div><span className="micro text-[10px] text-ink">Branża</span><br />Facility Management</div>
            <div><span className="micro text-[10px] text-ink">Hosting</span><br />EU / RODO</div>
            <div><span className="micro text-[10px] text-ink">Godziny robocze</span><br />Pn–Pt · 08:00–17:00</div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-paper-line">
          {team.members.map((m) => (
            <div key={m.name} className="p-6 bg-paper">
              {m.photo ? (
                <img src={m.photo} alt={m.name} className="w-full aspect-[4/5] object-cover" />
              ) : (
                <div className="industrial-hatch w-full aspect-[4/5] flex items-end justify-start p-3">
                  <span className="font-mono text-[10px] text-ink-soft">[ portret ]</span>
                </div>
              )}
              <h4 className="font-display font-bold text-[22px] mt-4">{m.name}</h4>
              <p className="micro text-[10px] mt-1 text-accent-dark">{m.role}</p>
              <p className="mt-3 text-[12px] text-ink-soft">{m.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
