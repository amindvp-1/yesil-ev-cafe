import { CakeSlice, Camera, Coffee, CupSoda, Croissant, Cookie } from "lucide-react";
import { galleryItems } from "../data";
import Reveal from "./Reveal";

const itemIcons: Record<string, typeof Coffee> = {
  g1: CupSoda,
  g2: Croissant,
  g3: Coffee,
  g4: Camera,
  g5: CakeSlice,
  g6: Cookie,
};

export default function Gallery() {
  return (
    <section className="section section--cream" id="gallery">
      <div className="container">
        <Reveal>
          <div className="section-head section-head--center">
            <span className="section-eyebrow">Gallery</span>
            <h2 className="section-title">Moments from the café</h2>
            <p className="section-intro">
              A peek at the warmth, the craft and the little details that make
              Moka feel like home.
            </p>
          </div>
        </Reveal>

        <div className="gallery__grid">
          {galleryItems.map((item) => {
            const Icon = itemIcons[item.id] ?? Coffee;
            return (
              <Reveal key={item.id}>
                <div
                  className={`gallery__item ${item.tone} ${
                    item.span === "tall"
                      ? "gallery__item--tall"
                      : item.span === "wide"
                        ? "gallery__item--wide"
                        : ""
                  }`}
                >
                  <Icon size={44} strokeWidth={1.4} />
                  <span>{item.label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
