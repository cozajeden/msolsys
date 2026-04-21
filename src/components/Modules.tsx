import { useState } from "react";
import { modules } from "../content";

export function Modules() {
  const [active, setActive] = useState(modules.defaultIndex);
  const current = modules.list[active];

  return (
    <section id="moduly" className="relative bg-ink text-paper">
      <div className="max-w-container mx-auto px-8 py-24">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-display text-[12px] tracking-[0.22em] uppercase text-accent">
            {modules.sectionNum}
          </span>
          <div className="rule flex-1 !bg-[#2a2a2a]" />
          <span className="eyebrow text-[#8a8680]">{modules.eyebrowRight}</span>
        </div>

        <div className="grid grid-cols-12 gap-10 items-start">
          {/* Rail */}
          <div className="col-span-12 lg:col-span-4">
            <h2 className="h-display text-[52px] md:text-[64px]">
              {modules.headline.map((l, i) => (
                <span key={i}>
                  {l}
                  <br />
                </span>
              ))}
            </h2>
            <p className="mt-6 text-[15px] leading-[1.6] text-[#b7b3aa]">{modules.lead}</p>

            <div className="mt-8 space-y-0 border-t border-[#2a2a2a]">
              {modules.list.map((m, i) => {
                const isActive = i === active;
                const soon = !m.src;
                return (
                  <button
                    key={m.num}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left font-display font-medium uppercase tracking-[0.16em] text-[11px] border-b border-[#2a2a2a] transition-colors ${
                      isActive
                        ? "bg-accent text-ink"
                        : "text-[#b7b3aa] hover:bg-[#1c1c1c] hover:text-white"
                    }`}
                  >
                    <span className="font-mono text-[10px]">{m.num}</span>
                    <span className="flex-1">{m.label}</span>
                    {soon && (
                      <span className="font-display uppercase tracking-[0.16em] text-[9px] px-1.5 py-0.5 bg-[#2a2a2a] text-[#8a8680]">
                        Soon
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Viewport */}
          <div className="col-span-12 lg:col-span-8">
            <div className="paper-card overflow-hidden bg-paper p-2.5 !border-[#2a2a2a]">
              <div className="flex items-center justify-between px-2 py-1">
                <div className="flex gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e06a6a]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e0b06a]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6ae09e]" />
                </div>
                <div className="font-mono text-[10px] text-ink-soft">
                  app.msolsys.com{current.url}
                </div>
                <span className="font-mono text-[10px] text-ink-soft">v2.4</span>
              </div>

              <div
                className="mt-2 relative bg-paper-soft overflow-hidden"
                style={{ aspectRatio: "16 / 10" }}
              >
                {current.src ? (
                  <img
                    src={current.src}
                    alt={current.label}
                    className="w-full h-full block"
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                  />
                ) : (
                  <div className="industrial-hatch absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                    <div className="font-display uppercase tracking-[0.22em] text-[11px] mb-3 text-accent-dark">
                      Moduł w realizacji
                    </div>
                    <div className="font-display font-bold text-[38px] text-ink leading-none">
                      {current.label}
                    </div>
                    <div className="mt-3 text-[12px] font-mono text-ink-soft max-w-[420px]">
                      Screen dodamy po release — poproś nas o wgląd w dev demo.
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 text-[11px] font-mono text-[#8a8680]">
              <span className="inline-block w-1 h-1 rounded-full bg-accent" />
              <span>{current.caption}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
