
import Reveal from "./Reveal";

export default function Menu() {
  return (
    <section className="section" id="menu">
      <div className="container">
        <Reveal>
          <div className="section-head section-head--center">
            <span className="section-eyebrow">منوی ما</span>
            <h2 className="section-title">منوی کافه یشیل او</h2>
            <p className="section-intro">
              برای آشنایی با نوشیدنی‌ها و خوراکی‌های کافه، منوی ما را ببینید.
            </p>
          </div>
        </Reveal>
        <div className="yesil-menu-images">
          <img src="/images/menu-1.jpg" alt="صفحه اول منوی کافه یشیل او" />
          <img src="/images/menu-2.jpg" alt="صفحه دوم منوی کافه یشیل او" />
        </div>
      </div>
    </section>
  );
}
