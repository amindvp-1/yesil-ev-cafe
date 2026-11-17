
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="section section--cream" id="about">
      <div className="container about__grid">
        <Reveal>
          <div className="about__photos">
            <img
              className="about__photo about__photo--main"
              src="/images/interior-1.jpg"
              alt="فضای داخلی کافه یشیل او"
            />
            <img
              className="about__photo about__photo--secondary"
              src="/images/interior-2.jpg"
              alt="نمایی دیگر از فضای کافه یشیل او"
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="about__text">
            <span className="section-eyebrow">درباره ما</span>

            <h2 className="section-title">
              یشیل او؛ فضایی برای لحظه‌های خوب
            </h2>

            <p>
              به یشیل او خوش آمدید؛ جایی برای دورهمی‌های دوستانه،
              گفت‌وگوهای صمیمی و فاصله گرفتن از شلوغی روزمره.
            </p>

            <p>
              ما دوست داریم در فضایی دلنشین میزبان شما باشیم
              و لحظات خوشی را در کنار هم تجربه کنیم.
            </p>

            <a href="#contact" className="btn btn-primary">
              راه‌های ارتباط با ما
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
