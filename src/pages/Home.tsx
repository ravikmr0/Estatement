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
} from "lucide-react";
import "./pages.css";

const heroImg =
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600";

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
    location: "Palo Alto, CA",
    beds: 4,
    baths: 3,
    area: "3,200 sqft",
    price: "$2.85M",
  },
  {
    img: "https://images.pexels.com/photos/16110999/pexels-photo-16110999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tag: "Investment",
    title: "Marina Bay Lofts",
    location: "San Francisco, CA",
    beds: 2,
    baths: 2,
    area: "1,480 sqft",
    price: "$1.42M",
  },
  {
    img: "https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tag: "New Listing",
    title: "Oakwood Modern Villa",
    location: "Menlo Park, CA",
    beds: 5,
    baths: 4,
    area: "4,100 sqft",
    price: "$3.95M",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <img className="home-hero-image" src={heroImg} alt="" />
        <div className="container home-hero-content">
          <span className="page-hero-eyebrow fade-up">
            <span className="dot" />
            Estate & Investment Advisory
          </span>
          <h1 className="fade-up fade-up-delay-1">
            Property decisions, <span className="accent">made confident.</span>
          </h1>
          <p className="fade-up fade-up-delay-2">
            We combine curated real estate opportunities with rigorous
            investment advisory — so you buy, hold, and sell with clarity and
            conviction.
          </p>
          <div className="home-hero-actions fade-up fade-up-delay-3">
            <Link to="/properties" className="btn btn-gold btn-lg">
              Explore Properties
              <ArrowRight />
            </Link>
            <Link to="/advisory" className="btn btn-outline btn-lg" style={{ color: "var(--surface)", borderColor: "rgba(255,255,255,0.3)" }}>
              Advisory Services
            </Link>
          </div>
          <div className="home-hero-stats fade-up fade-up-delay-3">
            <div>
              <div className="hero-stat-num">£2.4B+</div>
              <div className="hero-stat-label">Assets Advised</div>
            </div>
            <div>
              <div className="hero-stat-num">850+</div>
              <div className="hero-stat-label">Clients Served</div>
            </div>
            <div>
              <div className="hero-stat-num">18 yrs</div>
              <div className="hero-stat-label">Market Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">Why Mira</span>
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
          <div className="property-grid">
            {properties.map((p) => (
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
                    <span className="property-spec"><BedDouble /> {p.beds} Beds</span>
                    <span className="property-spec"><Bath /> {p.baths} Baths</span>
                    <span className="property-spec"><Maximize /> {p.area}</span>
                  </div>
                  <div className="property-price">{p.price}</div>
                </div>
              </div>
            ))}
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
