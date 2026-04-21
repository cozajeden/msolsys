import { brand, nav } from "../content";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-paper border-b border-paper-line">
      <div className="max-w-container mx-auto px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src="/assets/mss_logo.png" alt={brand.name} className="h-[26px] w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="micro text-[12px] text-ink">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#kontakt" className="micro text-[11px] hidden sm:inline-flex items-center gap-2">
            <span className="dot" /> Umów demo
          </a>
          <a href="#kontakt" className="btn-primary text-[12px]" style={{ padding: "10px 16px" }}>
            Zacznij <span>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
