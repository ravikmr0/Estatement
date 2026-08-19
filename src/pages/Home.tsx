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

const properties = [
  {
    img: "https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tag: "For Sale",
    title: "The Hillcrest Residence",
    location: "Noida Sector 129",
    beds: 4,
    baths: 3,
    area: "3,200 sq ft",
    price: "₹ 2.85 Cr*",
  },
  {
    img: "https://images.pexels.com/photos/16110999/pexels-photo-16110999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tag: "Investment",
    title: "Marina Bay Lofts",
    location: "Noida Sector 150",
    beds: 2,
    baths: 2,
    area: "1,480 sq ft",
    price: "₹ 1.42 Cr*",
  },
  {
    img: "https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tag: "New Listing",
    title: "Oakwood Modern Villa",
    location: "Greater Noida",
    beds: 5,
    baths: 4,
    area: "4,100 sq ft",
    price: "₹ 3.95 Cr*",
  },
  {
    img: "https://images.pexels.com/photos/31737859/pexels-photo-31737859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tag: "Premium",
    title: "Skyline Heights",
    location: "Yamuna Expressway",
    beds: 3,
    baths: 3,
    area: "2,860 sq ft",
    price: "₹ 2.30 Cr*",
  },
  {
    img: "https://images.pexels.com/photos/4424414/pexels-photo-4424414.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tag: "Investment",
    title: "Noida Green Court",
    location: "Noida",
    beds: 2,
    baths: 2,
    area: "1,620 sq ft",
    price: "₹ 1.08 Cr*",
  },
  {
    img: "https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tag: "For Sale",
    title: "Cedar Valley Villa",
    location: "Greater Noida West",
    beds: 4,
    baths: 3,
    area: "3,450 sq ft",
    price: "₹ 2.75 Cr*",
  },
  {
    img: "https://images.pexels.com/photos/27451770/pexels-photo-27451770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tag: "Luxury",
    title: "The Emerald Residences",
    location: "Noida Sector 150",
    beds: 4,
    baths: 4,
    area: "3,780 sq ft",
    price: "₹ 4.20 Cr*",
  },
];

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
              We're not a listing platform — we're your strategic partner in
              every property decision, from first viewing to final closing.
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

      <section className="section" style={{ background: "var(--brand-ivory)" }}>
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">Featured Listings</span>
            <h2 className="section-title">Curated properties</h2>
            <p className="section-subtitle">
              Hand-selected opportunities vetted by our advisory team for
              location, quality, and investment potential.
            </p>
          </div>
          <div className="featured-slider-shell">
            <button
              type="button"
              className="featured-slider-btn prev"
              onClick={handlePrevious}
              aria-label="Previous featured properties"
            >
              <ChevronLeft size={20} />
            </button>

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
                      <span className="property-spec"><BedDouble /> {p.beds} Beds</span>
                      <span className="property-spec"><Bath /> {p.baths} Baths</span>
                      <span className="property-spec"><Maximize /> {p.area}</span>
                    </div>
                    <div className="property-price">{p.price}</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="featured-slider-btn next"
              onClick={handleNext}
              aria-label="Next featured properties"
            >
              <ChevronRight size={20} />
            </button>
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
              <p>We start with your goals, timeline, and risk tolerance to define what the right property looks like for you.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><LineChart /></div>
              <h3>Analyze</h3>
              <p>Our team runs the numbers on every opportunity — yield, appreciation, tax implications, and exit strategy.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Sparkles /></div>
              <h3>Execute</h3>
              <p>From negotiation to closing, we manage every detail so you can move forward with total confidence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-band-inner">
            <div className="cta-band-text">
              <h2>Ready to make your next move?</h2>
              <p>Book a free 30-minute consultation with our advisory team. No pressure, just clarity.</p>
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
