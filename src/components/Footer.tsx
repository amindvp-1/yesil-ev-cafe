
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#home" className="brand">
          <img
            src="/images/logo.jpg"
            alt="لوگوی یشیل او"
            className="brand__logo"
          />
          <span>یشیل او</span>
        </a>
        <p className="footer__copy">
          © {new Date().getFullYear()} کافه یشیل او | تمامی حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}
