import { Coffee, HandHeart, Wifi } from "lucide-react";
import Reveal from "./Reveal";

const features = [
  {
    icon: Coffee,
    title: "Small-Batch Beans",
    text: "Roasted in-house every 48 hours for peak flavor.",
  },
  {
    icon: HandHeart,
    title: "Made with Care",
    text: "Every drink hand-poured by trained baristas.",
  },
  {
    icon: Wifi,
    title: "Cozy Workspace",
    text: "Fast Wi-Fi, warm corners and quiet music.",
  },
];

export default function About() {
  return (
    <section className="section section--cream" id="about">
      <div className="container about__grid">
        <Reveal>
          <div className="about__art" aria-hidden="true">
            <div className="about__tile about__tile--main" />
            <div className="about__tile about__tile--secondary">
              <Coffee size={64} strokeWidth={1.4} />
            </div>
            <div className="about__badge">
              <div className="about__badge-value">10 yrs</div>
              <div className="about__badge-label">of brewing</div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="about__text">
            <span className="section-eyebrow">About Us</span>
            <h2 className="section-title">
              A neighborhood café built on good beans &amp; warmer welcomes
            </h2>
            <p>
              Moka Café opened its doors in 2016 with one simple idea: coffee
              tastes better when it's made slowly and shared generously. Since
              then we've grown from a two-seat espresso bar into the
              neighborhood's favorite living room.
            </p>
            <p>
              We source our beans directly from family farms, roast them in
              small batches, and pair them with pastries baked fresh each
              morning. Whether you're grabbing a quick espresso or settling in
              for an afternoon, you're always part of the family here.
            </p>

            <div className="about__features">
              {features.map(({ icon: Icon, title, text }) => (
                <div key={title} className="feature">
                  <div className="feature__icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <div className="feature__title">{title}</div>
                  <div className="feature__text">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
