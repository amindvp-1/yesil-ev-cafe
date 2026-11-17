import { Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#home" className="brand">
          <Coffee className="brand__icon" size={20} />
          Moka <em>Café</em>
        </a>
        <p className="footer__copy">
          © {new Date().getFullYear()} Moka Café. Brewed with care, served with
          love.
        </p>
      </div>
    </footer>
  );
}
