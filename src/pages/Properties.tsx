import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, BedDouble, Maximize, Bath } from "lucide-react";
import "./pages.css";

const heroImg =
  "https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600";

type Property = {
  img: string;
  tag: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  area: string;
  price: string;
  category: "Residential" | "Investment" | "Commercial" | "Plots";
};

const allProperties: Property[] = [
  {
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=940&q=80",
    tag: "Authority Plots",
    title: "YEIDA Authority Plots",
    location: "YEIDA Growth Corridor",
    beds: 0,
    baths: 0,
    area: "50 - 600 sq. mtr.",
    price: "₹80,000 / sq. mtr.",
    category: "Plots",
  },
  {
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=940&q=80",
    tag: "Commercial Property",
    title: "ARQIS MALL",
    location: "Greater Noida",
    beds: 0,
    baths: 0,
    area: "Retail Shop / Studio Apartment",
    price: "Pre-launch ₹18,999 | Launch ₹21,999",
    category: "Commercial",
  },
];

const filters = ["All", "Commercial", "Plots"] as const;

export default function Properties() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const shown =
    active === "All"
      ? allProperties
      : allProperties.filter((p) => p.category === active);

  return (
    <>
      <section className="page-hero">
        <img className="page-hero-image" src={heroImg} alt="" />
        <div className="container page-hero-content">
          <span className="page-hero-eyebrow fade-up">
            <span className="dot" />
            Property Portfolio
          </span>
          <h1 className="page-hero-title fade-up fade-up-delay-1">
            Curated properties, vetted for value
          </h1>
          <p className="page-hero-subtitle fade-up fade-up-delay-2">
            Explore selected plots and commercial opportunities across Noida,
            Greater Noida, and the YEIDA corridor, reviewed for location,
            usability, and long-term potential.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-bar">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-chip ${active === f ? "active" : ""}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="property-grid">
            {shown.map((p) => (
              <div key={p.title} className="property-card">
                <div className="property-card-img">
                  <img src={p.img} alt={p.title} />
                  <span className="property-tag">{p.tag}</span>
                </div>
                <div className="property-card-body">
                  <h3>{p.title}</h3>
                  <div className="property-location">
                    <MapPin />
                    {p.location}
                  </div>
                  <div className="property-specs">
                    {p.beds > 0 && (
                      <span className="property-spec"><BedDouble /> {p.beds} Beds</span>
                    )}
                    {p.baths > 0 && (
                      <span className="property-spec"><Bath /> {p.baths} Baths</span>
                    )}
                    <span className="property-spec"><Maximize /> {p.area}</span>
                  </div>
                  <div className="property-price">{p.price}</div>
                  {p.title === "ARQIS MALL" && (
                    <div className="property-investment">Investment starting at ₹95 Lakh*</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {shown.length === 0 && (
            <p style={{ textAlign: "center", color: "var(--text-muted)", marginTop: 40 }}>
              No properties in this category right now. Check back soon.
            </p>
          )}
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-band-inner">
            <div className="cta-band-text">
              <h2>Don't see the right fit?</h2>
              <p>Tell us your budget, preferred location, and intended use. Our
                advisory team can also source opportunities beyond the listed
                portfolio.</p>
            </div>
            <div className="cta-band-actions">
              <Link to="/contact" className="btn btn-gold btn-lg">
                Request a Property
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
