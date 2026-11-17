
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal>
          <div className="section-head section-head--center">
            <span className="section-eyebrow">ارتباط با ما</span>
            <h2 className="section-title">منتظر دیدارتان هستیم</h2>
            <p className="section-intro">
              برای دیدن فضای یشیل او و دنبال کردن تازه‌ترین خبرها،
              از راه‌های ارتباطی زیر با ما همراه باشید.
            </p>
          </div>
        </Reveal>

        <div className="contact-details">
          <Reveal>
            <div className="contact-item">
              <span className="contact-item__icon">📍</span>
              <div>
                <h3>نشانی کافه</h3>
                <p>
                  تبریز، شهناز، از انتهای داش‌مغازه‌لر به طرف اهراب،
                  ساختمان سبز
                </p>
                <a
                  className="contact-link"
                  href="https://maps.apple.com/place?address=%D8%A7%D9%87%D8%B1%D8%A7%D8%A8,%20Tabriz,%20Iran&coordinate=38.073309,46.284345&name=%D8%A7%D9%87%D8%B1%D8%A7%D8%A8&map=explore"
                  target="_blank"
                  rel="noreferrer"
                >
                  مشاهده موقعیت روی نقشه
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="contact-item">
              <span className="contact-item__icon">📞</span>
              <div>
                <h3>شماره تماس</h3>
                <p dir="ltr">09991902019</p>
                <a className="contact-link" href="tel:09991902019">
                  تماس با کافه
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="contact-item">
              <span className="contact-item__icon">📷</span>
              <div>
                <h3>اینستاگرام</h3>
                <p>ما را در اینستاگرام دنبال کنید.</p>
                <a
                  className="contact-link"
                  href="https://www.instagram.com/yesilev.cafe/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @yesilev.cafe
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
