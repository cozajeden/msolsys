import { brand } from "../content";

export function Footer() {
  return (
    <footer className="bg-paper text-ink">
      <div className="max-w-container mx-auto px-8 py-14">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <img src="/assets/mss_logo.png" alt={brand.name} className="h-10 w-auto" />
            <p className="mt-6 text-[13px] max-w-[360px] text-ink-soft">
              MSS — Management Solutions System. Oprogramowanie dla zespołów Facility Management, zbudowane na doświadczeniu branży.
            </p>
          </div>
          <Col title="Produkt" items={[["#moduly", "Moduły"], ["#pakiety", "Pakiety"], ["#kontakt", "Demo"]]} />
          <Col title="Firma" items={[["#zespol", "Zespół"], [`mailto:${brand.email}`, "Kontakt"], ["#", "Kariera"]]} />
          <Col title="Prawne" items={[["#", "Regulamin SaaS"], ["#", "Polityka prywatności"], ["#", "RODO / DPA"]]} wide />
        </div>
        <div className="rule mt-10" />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-ink-soft">
          <span>{brand.copyright} — {brand.copyrightCredit}</span>
          <span>Zbudowano w PL · Hostowane w EU</span>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, items, wide }: { title: string; items: [string, string][]; wide?: boolean }) {
  return (
    <div className={wide ? "col-span-12 md:col-span-3" : "col-span-6 md:col-span-2"}>
      <div className="micro text-[11px] mb-3">{title}</div>
      <ul className="space-y-1 text-[13px]">
        {items.map(([href, label]) => (
          <li key={label}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
