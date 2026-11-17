import { useEffect, useState } from "react";
import { Coffee, Menu as MenuIcon, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="container navbar__inner">
          <a href="#home" className="brand" onClick={() => setOpen(false)}>
            <Coffee className="brand__icon" size={24} strokeWidth={2.2} />
            Moka <em>Café</em>
          </a>

          <ul className="navbar__links">
            {links.map((link) => (
              <li key={link.href}>
                <a className="navbar__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#menu" className="btn btn-primary navbar__cta">
            Order Now
          </a>

          <button
            className="navbar__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </header>

      <nav className={`mobile-menu ${open ? "mobile-menu--open" : ""}`} aria-hidden={!open}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#menu" onClick={() => setOpen(false)}>
          Order Now
        </a>
      </nav>
    </>
  );
}
