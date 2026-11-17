import { Coffee } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      <div className="container hero__inner">
        <div>
          <span className="hero__badge">Est. 2016 · Artisan Roastery</span>
          <h1 className="hero__title">
            Where every cup <em>tells a story</em>
          </h1>
          <p className="hero__text">
            Small-batch roasted beans, hand-poured milk art and pastries baked
            at dawn — Moka Café is your warm corner of the city, from the first
            morning sip to the last evening refill.
          </p>
          <div className="hero__actions">
            <a href="#menu" className="btn btn-primary">
              Explore the Menu
            </a>
            <a href="#about" className="btn btn-outline">
              Our Story
            </a>
          </div>
          <div className="hero__stats">
            <div>
              <div className="hero__stat-value">12+</div>
              <div className="hero__stat-label">House Blends</div>
            </div>
            <div>
              <div className="hero__stat-value">50k</div>
              <div className="hero__stat-label">Happy Sips / Year</div>
            </div>
            <div>
              <div className="hero__stat-value">4.9</div>
              <div className="hero__stat-label">Guest Rating</div>
            </div>
          </div>
        </div>

        <div className="hero__art" aria-hidden="true">
          <div className="hero__ring" />
          <div className="hero__cup">
            <div className="hero__steam">
              <span />
              <span />
              <span />
            </div>
            <Coffee className="hero__cup-icon" size={96} strokeWidth={1.4} />
          </div>
        </div>
      </div>
    </section>
  );
}
