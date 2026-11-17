
import { useEffect, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";

const links = [
  { label: "خانه", href: "#home" },
  { label: "درباره ما", href: "#about" },
  { label: "منوی کافه", href: "#menu" },
  { label: "گالری", href: "#gallery" },
  { label: "تماس با ما", href: "#contact" },
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
          <nav className="navbar__navigation">
            <ul className="navbar__links">
              {links.map((link) => (
                <li key={link.href}>
                  <a className="navbar__link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#home"
            className="brand"
            onClick={() => setOpen(false)}
          >
            <span className="brand__name">یشیل او</span>
            <img
              src="/images/logo.jpg"
              alt="لوگوی کافه یشیل او"
              className="brand__logo"
            />
          </a>

          <button
            className="navbar__burger"
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </header>

      <nav
        className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}
        aria-hidden={!open}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
