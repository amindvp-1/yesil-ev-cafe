
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__photo">
        <img
          src="/images/exterior.jpg"
          alt="نمای بیرونی کافه یشیل او"
        />
      </div>

      <div className="hero__overlay" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">
            به کافه یشیل او خوش آمدید
          </span>

          <h1 className="hero__title">
            لحظه‌هایی خوش
            <em> در یشیل او</em>
          </h1>

          <p className="hero__text">
            جایی برای مکث، گفت‌وگو و لذت بردن از لحظه‌ها.
            منتظرتان هستیم تا تجربه‌ای دلنشین داشته باشید.
          </p>

          <div className="hero__actions">
            <a href="#menu" className="btn btn-primary">
              مشاهده منوی کافه
            </a>
            <a href="#contact" className="btn btn-outline">
              ارتباط با ما
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
