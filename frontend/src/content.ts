/**
 * MSS · Content
 * -----------------------------------------------------------------------
 * The single source of truth for ALL user-facing text on the marketing
 * site. Non-developers can edit this file — just change strings between
 * the quotes. Nothing else to touch.
 *
 * Rules of thumb:
 *   • Keep headline lines reasonably short — they set the hero rhythm.
 *   • `accent` inside `hero.title` is the coloured fragment.
 *   • Package prices are strings so you can write "od 12 000" or "—".
 */

export type Feature = {
  number: string;
  tag: string;
  title: string;
  bullets: string[];
  highlight?: boolean;
};

export type PackageTier = {
  name: string;
  subtitle: string;
  price: string;
  priceUnit?: string;
  yearlyNote?: string;
  bullets: string[];
  ctaLabel: string;
  featured?: boolean;
};

export type TeamMember = {
  name: string;
  role: string;
  blurb: string;
  photo?: string;
};

export const brand = {
  name: "MSS",
  fullName: "Management Solutions System",
  tagline: "Zbudowany na doświadczeniu",
  phone: "+48 697 081 610",
  email: "kontakt@msolsys.com",
  hours: "Pn–Pt · 08:00–17:00",
  location: "Poznań, PL",
  copyright: "© 2026 MSS. Wszelkie prawa zastrzeżone.",
  copyrightCredit: "Radosław Semler & Ryszard Napierała",
};

export const nav = [
  { href: "#produkt", label: "Produkt" },
  { href: "#moduly", label: "Moduły" },
  { href: "#pakiety", label: "Pakiety" },
  { href: "#zespol", label: "Zespół" },
  { href: "#kontakt", label: "Kontakt" },
];

export const hero = {
  eyebrowLeft: "001 — Management Solutions System",
  eyebrowRight: "Zbudowany na doświadczeniu",
  titleLine1: "Finanse",
  titleAccent: "pod kontrolą.",
  titleLine2: "Oferta w godzinę.",
  lead:
    "MSS to nowoczesny system do zarządzania budżetem Facility Management — ofertowanie, przeglądy, kontrola rentowności i raportowanie w jednym miejscu. Zbudowany przez inżynierów i finansistów, którzy wiedzą, jak wygląda dzień w branży FM.",
  ctaPrimary: "Umów demo",
  ctaSecondary: "Zobacz moduły",
  trialNote: "14 dni bezpłatnie · bez karty",
  statusCard: {
    label: "Stan systemu",
    status: "Online",
    stats: [
      { value: "99,9%", label: "uptime 30d" },
      { value: "< 4h", label: "1. reakcja P1" },
      { value: "26", label: "dni do wdrożenia" },
      { value: "6", label: "modułów w zestawie" },
    ],
    footer: "PL · EU hosting · RODO",
  },
  marquee: [
    "Ofertowanie", "Przeglądy techniczne", "Ryczałty", "Kontrahenci",
    "Raporty rentowności", "Finanse", "Lokalizacje wielopodmiotowe", "Uprawnienia",
  ],
};

export const problem = {
  sectionNum: "002 / Dlaczego MSS",
  headline: ["Koniec z", "papierowym", "chaosem."],
  lead:
    "Większość firm FM traci marżę w trzech miejscach: na wolnym ofertowaniu, na błędach w kalkulacji i na braku spójnego raportu rentowności. MSS rozwiązuje wszystkie trzy.",
  tiles: [
    { state: "Przed MSS", title: "Wiele szat graficznych", body: "Każdy ofertujący tworzy ofertę po swojemu. Klient odbiera to jako firmę niespójną." },
    { state: "Z MSS",     title: "Jednolita oferta w 15 min", body: "Szablon, kalkulator, akceptacja. Każda oferta wygląda jak z jednej firmy — bo jest." },
    { state: "Przed MSS", title: "Marża znika po drodze", body: "Ręczne kalkulacje, brak narzutów, brak wglądu w rentowność projektu w czasie rzeczywistym." },
    { state: "Z MSS",     title: "Stała kontrola DB", body: "Jeden panel, DB% na każdej ofercie, raport rentowności per lokalizacja i projekt." },
  ],
};

/**
 * Modules section — interactive tab switcher.
 * Add/remove entries in `list`. Leave `src: null` for a "Soon" placeholder.
 * `defaultIndex` controls which module is active on first load.
 */
export type ModuleEntry = {
  num: string;
  label: string;
  url: string;
  src: string | null;
  caption: string;
};

export const modules: {
  sectionNum: string;
  eyebrowRight: string;
  headline: string[];
  lead: string;
  defaultIndex: number;
  list: ModuleEntry[];
} = {
  sectionNum: "003 / Workplace MSS",
  eyebrowRight: "Widok po zalogowaniu",
  headline: ["Siedem modułów.", "Jeden system."],
  lead:
    "Kliknij w moduł poniżej, żeby zobaczyć jego widok. Wszystko w jednej intuicyjnej nawigacji — bez kombinowania, bez pluginów.",
  defaultIndex: 1,
  list: [
    { num: "01",  label: "Strona główna",           url: "/home",                  src: "/assets/screen_home.png",               caption: "Strona główna · pulpit z dostępem do wszystkich modułów" },
    { num: "02",  label: "Moduł projektów",         url: "/projects/baseunits",    src: "/assets/screen_project_units.png",      caption: "Moduł projektów · jednostki bazowe i konfiguracja narzutów" },
    { num: "02b", label: "↳ Dane projektu",         url: "/projects/1/detail",     src: "/assets/screen_project_detail.png",     caption: "Moduł projektów · dane lokalizacji i przypisani użytkownicy" },
    { num: "03",  label: "Moduł ofert",             url: "/offers",                src: "/assets/screen_offers_list.png",        caption: "Moduł ofert · lista wszystkich ofert z DB%, statusem i filtrami" },
    { num: "03b", label: "↳ Szczegół oferty",       url: "/offers/1/detail",       src: "/assets/screen_offers_detail.png",      caption: "Moduł ofert · dane podstawowe, specyfikacja, DB ze specyfikacji" },
    { num: "03c", label: "↳ Podgląd PDF",           url: "/offers/1/pdf",          src: "/assets/screen_offers_pdf.png",         caption: "Moduł ofert · gotowy PDF z logo klienta, akceptacja wbudowana" },
    { num: "04",  label: "Moduł ryczałtu",          url: "/flatrate",              src: "/assets/screen_flatrate_list.png",      caption: "Moduł ryczałtu · lista ofert ryczałtowych z filtrowaniem i statusem" },
    { num: "04b", label: "↳ Historia zmian",        url: "/flatrate/1/history",    src: "/assets/screen_flatrate_history.png",   caption: "Moduł ryczałtu · pełna historia zmian i akceptacji oferty" },
    { num: "04c", label: "↳ Szybki kalkulator",     url: "/flatrate/1/calc",       src: "/assets/screen_flatrate_calc.png",      caption: "Moduł ryczałtu · kalkulacja DB, wynagrodzenia i wartości netto" },
    { num: "05",  label: "Moduł kontrahentów",      url: "/contractors",           src: "/assets/screen_contractors_list.png",   caption: "Moduł kontrahentów · lista firm z NIP, adresem i statusem zatwierdzenia" },
    { num: "05b", label: "↳ Karta kontrahenta",     url: "/contractors/1",         src: "/assets/screen_contractors_detail.png", caption: "Moduł kontrahentów · dane, kontakty, konta bankowe i przypisane projekty" },
    { num: "05c", label: "↳ Nowy kontrahent",       url: "/contractors/new",       src: "/assets/screen_contractors_new.png",    caption: "Moduł kontrahentów · formularz dodawania firmy z uploadem logo" },
    { num: "06",  label: "Moduł finansowy",         url: "/finance/payroll",       src: "/assets/screen_finance_payroll.png",    caption: "Moduł finansowy · wynagrodzenia gotowe do wypłaty per pracownik" },
    { num: "06b", label: "↳ Oferty do fakturowania",url: "/finance/invoices",      src: "/assets/screen_finance_invoices.png",   caption: "Moduł finansowy · lista ofert oczekujących na wystawienie faktury" },
    { num: "06c", label: "↳ Lista kosztów",         url: "/finance/costs",         src: "/assets/screen_finance_costs.png",      caption: "Moduł finansowy · koszty z podziałem na kontrahentów, faktury i status" },
    { num: "07",  label: "Moduł uprawnień",         url: "/permissions/groups",    src: "/assets/screen_perms_groups.png",       caption: "Moduł uprawnień · grupy ról (menadżer, technik, menadżer projektu)" },
    { num: "07b", label: "↳ Lista użytkowników",    url: "/permissions/users",     src: "/assets/screen_perms_users.png",        caption: "Moduł uprawnień · wszyscy użytkownicy z datą logowania i przełożonym" },
    { num: "07c", label: "↳ Edycja uprawnień",      url: "/permissions/users/3",   src: "/assets/screen_perms_edit.png",         caption: "Moduł uprawnień · granularne uprawnienia per użytkownik i grupa" },
  ],
};

export const features: { sectionNum: string; headline: string[]; items: Feature[] } = {
  sectionNum: "004 / Funkcje",
  headline: ["Co robi za Ciebie", "ten system."],
  items: [
    {
      number: "01",
      tag: "Ofertowanie",
      title: "Oferta bez błędów. Zawsze ten sam format.",
      bullets: [
        "Stały schemat oferty — bez przeoczeń",
        "Kalkulator narzutów i marży na żywo",
        "Akceptacja wewnętrzna (workflow)",
        "Eksport do PDF z logo klienta",
      ],
    },
    {
      number: "02",
      tag: "Rentowność",
      title: "DB na każdym poziomie projektu.",
      highlight: true,
      bullets: [
        "Marża per oferta, per lokalizacja, per kontrakt",
        "Koszty paliwa, materiału, usługi, premii",
        "Oferty w akceptacji vs. zaakceptowane",
        "Alert gdy DB spada poniżej progu",
      ],
    },
    {
      number: "03",
      tag: "Przeglądy",
      title: "Harmonogram, który sam przypomina.",
      bullets: [
        "Cykliczne przeglądy techniczne per lokalizacja",
        "Powiadomienia e-mail i (Enterprise) SMS",
        "Historia zgłoszeń i interwencji",
        "Integracja z modułem ofert prac dodatkowych",
      ],
    },
  ],
};

export const metrics = [
  { value: "34 mld", label: "Rynek FM w Polsce (2026)" },
  { value: "63,7%",  label: "firm outsource'uje FM" },
  { value: "−40%",   label: "czasu na ofertę" },
  { value: "+8pp",   label: "średni wzrost DB" },
];

export const packages: { sectionNum: string; note: string; headline: string[]; tiers: PackageTier[]; footnotes: string[] } = {
  sectionNum: "005 / Pakiety",
  note: "Ceny netto, PLN / miesiąc",
  headline: ["Trzy pakiety.", "Zero niespodzianek."],
  tiers: [
    {
      name: "Starter",
      subtitle: "Dla małych firm FM",
      price: "3 500",
      priceUnit: "PLN / m-c",
      yearlyNote: "lub 35 700 PLN / rok (−15%)",
      bullets: [
        "do 5 lokalizacji · 800 PLN za kolejną",
        "25 GB danych",
        "SLA Standard 48h / 8h",
        "1 sesja szkoleniowa",
        ""
      ],
      ctaLabel: "Wybierz Starter",
    },
    {
      name: "Professional",
      subtitle: "Najczęstszy wybór",
      price: "8 000",
      priceUnit: "PLN / m-c",
      yearlyNote: "lub 81 600 PLN / rok (−15%)",
      featured: true,
      bullets: [
        "do 15 lokalizacji · 650 PLN za kolejną",
        "100 GB + harmonogramy przeglądów",
        "SLA Rozszerzony 24h / 4h",
        "2 sesje + roczna sesja przypominająca",
        ""
      ],
      ctaLabel: "Wybierz Pro",
    },
    {
      name: "Enterprise",
      subtitle: "Duże kontrakty",
      price: "od 14 000",
      priceUnit: "",
      yearlyNote: "cena negocjowana",
      bullets: [
        "do 30 lokalizacji  · 500 PLN za kolejną",
        "300 GB",
        "custom raporty + eksport API",
        "SLA Priorytet 8h / 2h",
        "integracje ERP",
      ],
      ctaLabel: "Umów rozmowę",
    },
  ],
  footnotes: [
    "14 dni bezpłatnie, bez karty. Umowa min. 12 m-cy.",
    "Koszt wdrożenia jednorazowo: 3 000 / 6 000 / od 15 000 PLN.",
    "Rabat roczny 15%. Program poleceń — 1 m-c gratis.",
  ],
};

export const team: { sectionNum: string; headline: string[]; lead: string; members: TeamMember[] } = {
  sectionNum: "006 / Zespół",
  headline: ["Trzy osoby.", "Żadnych pośredników."],
  lead:
    "Odbierasz telefon — rozmawiasz z osobą, która zna Twój kod aplikacji. Mały zespół to nasza przewaga, nie wada: decyzje zapadają w godzinę, a nie w 40-osobowym łańcuchu maili.",
  members: [
    { name: "Arkadiusz Matuszak", role: "CEO · Strategia",   blurb: "20+ lat w branży FM. Prowadzi sprzedaż i wdrożenia.", photo: "/assets/arkadiusz.png" },
    { name: "Radosław Semler",    role: "Software Engineer", blurb: "Projektuje i pisze rdzeń MSS. Odpowiada za jakość kodu.", photo: "/assets/radoslaw.png" },
    { name: "Ryszard Napierała",  role: "System Administrator", blurb: "Infrastruktura, backupy, uptime. Pilnuje serwerów 24/7.", photo: "/assets/ryszard.png" },
  ],
};

export const faq = {
  sectionNum: "007 / FAQ",
  headline: "Często pytacie.",
  lead: "Nie ma tu? Napisz na dole strony — odpowiemy w ciągu 1 dnia roboczego.",
  items: [
    { q: "Ile trwa wdrożenie?", a: "Starter 1–2 tygodnie, Professional 2–4 tygodnie, Enterprise 4–12 tygodni (w zależności od integracji)." },
    { q: "Czy mogę wyeksportować swoje dane?", a: "Tak — w dowolnym momencie, w formatach CSV/XLSX. Po rozwiązaniu umowy masz 30 dni na pobranie danych." },
    { q: "Gdzie są przechowywane dane?", a: "Wyłącznie na serwerach w Europejskim Obszarze Gospodarczym. Backup co 24h. Umowa DPA zgodna z RODO." },
    { q: "Czy jest okres próbny?", a: "Tak — 14 dni bezpłatnie, bez karty. Aktywujemy konto po rozmowie kwalifikacyjnej." },
    { q: "Czy integrujecie się z naszym ERP?", a: "W pakiecie Enterprise — tak. Wycena integracji indywidualna (od 2 000 PLN). Działamy głównie na REST API i CSV." },
  ],
};

export const contact = {
  sectionNum: "008 / Kontakt",
  headline: ["Umów", "demo."],
  lead:
    "30 minut. Pokażemy ofertę end-to-end na Twoich danych. Odpowiadamy w ciągu 1 dnia roboczego — prawdziwe osoby, prawdziwa skrzynka.",
  recipientsNote: "CEO · SWE · SysAdmin",
  submitLabel: "Wyślij wiadomość",
  rodoLabel:
    "Wyrażam zgodę na przetwarzanie danych osobowych w celu odpowiedzi na zapytanie. Szczegóły w Polityce Prywatności. *",
};
