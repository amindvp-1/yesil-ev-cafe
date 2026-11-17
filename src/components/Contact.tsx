import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { contactInfo, openingHours } from "../data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-eyebrow">Contact</span>
            <h2 className="section-title">Come say hello</h2>
            <p className="section-intro">
              We're just around the corner — drop by for a cup, give us a call,
              or message us on WhatsApp to reserve a table.
            </p>
          </div>
        </Reveal>

        <div className="contact__grid">
          <Reveal>
            <div className="contact__card">
              <div className="contact__rows">
                <div className="contact__row">
                  <div className="contact__row-icon">
                    <MapPin size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="contact__row-label">Address</div>
                    <div className="contact__row-value">{contactInfo.address}</div>
                  </div>
                </div>

                <div className="contact__row">
                  <div className="contact__row-icon">
                    <Phone size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="contact__row-label">Phone</div>
                    <div className="contact__row-value">
                      <a href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`}>
                        {contactInfo.phone}
                      </a>
                      {" · "}
                      <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                    </div>
                  </div>
                </div>

                <div className="contact__row">
                  <div className="contact__row-icon">
                    <Clock size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="contact__row-label">Opening Hours</div>
                    <ul className="hours">
                      {openingHours.map((h) => (
                        <li key={h.day}>
                          <span className="hours__day">{h.day}</span>
                          <span className="hours__time">{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="contact__cta">
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    contactInfo.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ justifyContent: "center" }}
                >
                  <MapPin size={18} />
                  Get Directions
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="contact__map" aria-hidden="true">
              <div className="contact__map-pin">
                <MapPin size={44} strokeWidth={1.6} />
                <div>
                  <strong>Moka Café</strong>
                  <br />
                  {contactInfo.address}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
