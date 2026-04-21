import { metrics } from "../content";

export function Metrics() {
  return (
    <section className="relative bg-ink text-paper">
      <div className="max-w-container mx-auto px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="font-display font-bold text-[48px] leading-none">{m.value}</div>
            <div className="micro text-[11px] mt-2 text-accent">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
