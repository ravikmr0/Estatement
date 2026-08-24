import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Maximize } from "lucide-react";
import "./pages.css";
import { projects } from "../data/projects";

const heroImg =
  "/hero/top_building.jpg";

const allProperties = projects;

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
                    <span className="property-spec"><Maximize /> {p.area}</span>
                  </div>
                  <div className="property-price">{p.price}</div>
                  <div className="property-investment">{p.highlight}</div>
                  <div className="property-actions">
                    <Link to="/contact" className="btn btn-primary property-action">
                      Get Quote
                    </Link>
                    <Link to={`/properties/${p.slug}`} className="btn btn-outline property-action">
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
