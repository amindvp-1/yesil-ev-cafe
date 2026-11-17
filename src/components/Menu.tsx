import { Coffee, CupSoda, Dessert } from "lucide-react";
import { menuItems, type MenuItem } from "../data";
import Reveal from "./Reveal";

const artIcons: Record<MenuItem["art"], typeof Coffee> = {
  coffee: Coffee,
  latte: CupSoda,
  dessert: Dessert,
};

function MenuCard({ item }: { item: MenuItem }) {
  const Icon = artIcons[item.art];
  return (
    <article className="menu-card">
      <div className={`menu-card__art menu-card__art--${item.art}`}>
        <span className="menu-card__tag">{item.tag}</span>
        <Icon size={56} strokeWidth={1.4} />
      </div>
      <div className="menu-card__body">
        <div className="menu-card__row">
          <h3 className="menu-card__name">{item.name}</h3>
          <span className="menu-card__price">{item.price}</span>
        </div>
        <p className="menu-card__desc">{item.description}</p>
      </div>
    </article>
  );
}

export default function Menu() {
  return (
    <section className="section" id="menu">
      <div className="container">
        <Reveal>
          <div className="section-head section-head--center">
            <span className="section-eyebrow">Our Menu</span>
            <h2 className="section-title">Crowd favorites, crafted daily</h2>
            <p className="section-intro">
              From the first espresso of the morning to a slice of moka cake
              after dinner — six house favorites our guests keep coming back
              for.
            </p>
          </div>
        </Reveal>

        <div className="menu__grid">
          {menuItems.map((item) => (
            <Reveal key={item.id}>
              <MenuCard item={item} />
            </Reveal>
          ))}
        </div>

        <p className="menu__note">
          Looking for something else? Ask our baristas — we also serve
          single-origin pour-overs, iced brews and a daily dessert special.
        </p>
      </div>
    </section>
  );
}
