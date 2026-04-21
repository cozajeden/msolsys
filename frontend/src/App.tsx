import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Modules } from "./components/Modules";
import { Features } from "./components/Features";
import { Metrics } from "./components/Metrics";
import { Packages } from "./components/Packages";
import { Team } from "./components/Team";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Modules />
        <Features />
        <Metrics />
        <Packages />
        <Team />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
