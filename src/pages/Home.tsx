import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  MapPin,
  BedDouble,
  Maximize,
  Bath,
  Compass,
  LineChart,
  Handshake,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import HeroSlider from "./HeroSlider";
import "./pages.css";
import { projects } from "../data/projects";

const features = [
  {
    icon: TrendingUp,
    title: "Data-Driven Insights",
    text: "Every recommendation is backed by deep market analysis, comparable sales data, and growth forecasts — not guesswork.",
  },
  {
    icon: ShieldCheck,
    title: "Risk-First Approach",
    text: "We stress-test every opportunity against market downturns, zoning changes, and liquidity scenarios before we present it.",
  },
  {
    icon: Handshake,
    title: "Client-Aligned Advisory",
    text: "No commissions on specific properties. Our advice is aligned with your goals, not a transaction fee.",
  },
];

const properties = projects;

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(properties.length - itemsPerView, 0);
  const visibleProperties = properties.slice(currentIndex, currentIndex + itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <>
      <HeroSlider />

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">Why ESTATEMENT</span>
            <h2 className="section-title">Advisory that puts you first</h2>
            <p className="section-subtitle">
              We help you make important property decisions with local market
              context, practical analysis, and support from first shortlist to
              final closing.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">
                  <f.icon />
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section featured-properties-section" style={{ background: "var(--brand-ivory)" }}>
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">Featured Listings</span>
            <h2 className="section-title">Curated properties</h2>
            <p className="section-subtitle">
              A focused selection of residences, commercial spaces, and plots
              across Noida, Greater Noida, and the YEIDA growth corridor.
            </p>
          </div>
          <div className="featured-slider-shell">
            {properties.length > itemsPerView && (
              <button
                type="button"
                className="featured-slider-btn prev"
                onClick={handlePrevious}
                aria-label="Previous featured properties"
              >
                <ChevronLeft size={20} />
              </button>
            )}

            <div className="property-grid featured-slider-grid">
              {visibleProperties.map((p) => (
                <div key={p.title} className="property-card featured-card">
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
                    {p.title === "ACE ARTE" && (
                      <div className="property-investment">Premium skyline residences with a refined urban address.</div>
                    )}
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

            {properties.length > itemsPerView && (
              <button
                type="button"
                className="featured-slider-btn next"
                onClick={handleNext}
                aria-label="Next featured properties"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link to="/properties" className="btn btn-primary btn-lg">
              View All Properties
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">Our Approach</span>
            <h2 className="section-title">A clearer path to property success</h2>
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon"><Compass /></div>
              <h3>Discover</h3>
              <p>We understand your purpose, budget, timeline, and preferred location before defining the right property brief.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><LineChart /></div>
              <h3>Analyze</h3>
              <p>We compare pricing, connectivity, rental potential, approvals, and the risks that can affect long-term value.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Sparkles /></div>
              <h3>Execute</h3>
              <p>From site visits and negotiations to due diligence and closing, we keep the next steps clear and well coordinated.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-band-inner">
            <div className="cta-band-text">
              <h2>Ready to make your next move?</h2>
              <p>Share your requirement with our advisory team and get a clear view of the next practical step. No pressure, just clarity.</p>
            </div>
            <div className="cta-band-actions">
              <Link to="/contact" className="btn btn-gold btn-lg">
                Book a Consultation
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
