import { faq } from "../content";

export function Faq() {
  return (
    <section className="relative bg-paper">
      <div className="max-w-container mx-auto px-8 py-24 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <span className="font-display text-[12px] tracking-[0.22em] uppercase text-accent-dark">
            {faq.sectionNum}
          </span>
          <h2 className="h-display text-[52px] mt-3 !leading-[0.95]">{faq.headline}</h2>
          <p className="mt-6 text-[14px] text-ink-soft">{faq.lead}</p>
        </div>
        <div className="col-span-12 md:col-span-8 border-t border-b border-paper-line">
          {faq.items.map((it, i) => (
            <details key={i} className="py-5 group cursor-pointer border-t border-paper-line first:border-t-0">
              <summary className="flex justify-between items-center list-none">
                <span className="font-display font-bold text-[22px]">{it.q}</span>
                <span className="font-display text-[28px] text-accent-dark transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[14px] text-ink-soft">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
