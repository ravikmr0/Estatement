import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, BedDouble, Maximize, Bath } from "lucide-react";
import "./pages.css";

const heroImg =
  "/hero/top_building.jpg";

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
    img: "/hero/yeida_plots.png",
    tag: "Authority Plots",
    title: "YEIDA Authority Plots",
    location: "YEIDA Yamuna Expressway",
    beds: 0,
    baths: 0,
    area: "50 - 600 sq. mtr.",
    price: "₹80,000 / sq. mtr.",
    category: "Plots",
  },
  {
    img: "/property/arqis_mall.png",
    tag: "Commercial Property",
    title: "ARQIS MALL",
    location: "Noida Expressway Sector 129",
    beds: 0,
    baths: 0,
    area: "Retail Shop / Studio Apartment",
    price: "Pre-launch ₹18,999 | Launch ₹21,999",
    category: "Commercial",
  },
  {
    img: "/property/eldeco_7peek.jpg",
    tag: "Pre-launch Offers",
    title: "ELDECO 7 PEAKS",
    location: "Omicron, Greater Noida",
    beds: 0,
    baths: 0,
    area: "3 & 4 BHK | Luxury Apartments & Penthouses",
    price: "₹2.19 Cr onward",
    category: "Residential",
  },
];

const filters = ["All", "Residential", "Commercial", "Plots"] as const;

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
                  {p.title === "YEIDA Authority Plots" && (
                    <div className="property-investment">Near Noida International Airport · Film City · High-growth corridor</div>
                  )}
                  {p.title === "ELDECO 7 PEAKS" && (
                    <div className="property-investment">By Eldeco Group · RERA Approved: UPRERAPRJ106523/01/2026</div>
                  )}
                  <div className="property-actions">
                    <Link to="/contact" className="btn btn-primary property-action">
                      Get Quote
                    </Link>
                    <Link to="/properties" className="btn btn-outline property-action">
                      More Details
                    </Link>
                  </div>
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
