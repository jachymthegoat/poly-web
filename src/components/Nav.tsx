import { useState, useEffect } from "react";
import { AboutPopUp } from "./AboutPopUp";

export function Nav() {

  // musí bejt uvnitř objektu
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const resumeUrl = `${new URL("../assets/resume.pdf", import.meta.url).href}#page=1`;

  const navItems = [
  { label: "O mně", onClick: () => setIsAboutOpen(true) },
  { label: "Životopis", onClick: () => window.open(resumeUrl, "_blank", "noopener,noreferrer") },
  ];

  // tady predavam co dela onClose
  return (
    <header className={`nav${isScrolled ? " nav--scrolled" : ""}`}>
      <a href="/" className="nav-brand">
        Jáchym
      </a>
      <nav className="nav-links" aria-label="Main">
        {navItems.map((item) => (
          <button key={item.label} onClick={item.onClick} className="nav-link">
            {item.label}
          </button>
        ))}
        <AboutPopUp isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      </nav>
    </header>
  );
}
