
import Reveal from "./Reveal";

const photos = [
  { src: "/images/exterior.jpg", alt: "نمای بیرونی کافه یشیل او" },
  { src: "/images/interior-1.jpg", alt: "فضای داخلی کافه" },
  { src: "/images/interior-2.jpg", alt: "چیدمان داخلی کافه" },
];

export default function Gallery() {
  return (
    <section className="section section--cream" id="gallery">
      <div className="container">
        <Reveal>
          <div className="section-head section-head--center">
            <span className="section-eyebrow">گالری تصاویر</span>
            <h2 className="section-title">نگاهی به فضای یشیل او</h2>
          </div>
        </Reveal>
        <div className="yesil-gallery">
          {photos.map((photo) => (
            <Reveal key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
