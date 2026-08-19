import { Link } from "react-router-dom";
import { ArrowRight, Check, TrendingUp, ShieldCheck, Wallet, Building2, Calculator, FileSearch, Scale } from "lucide-react";
import "./pages.css";

const heroImg =
  "https://images.pexels.com/photos/7698712/pexels-photo-7698712.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600";

const steps = [
  { title: "Discovery", text: "We sit down to understand your goals, timeline, risk tolerance, and financial picture in detail." },
  { title: "Strategy", text: "We build a tailored investment strategy with clear criteria, target returns, and an exit plan." },
  { title: "Sourcing", text: "Our team scours on- and off-market opportunities that match your strategy and stress-tests each one." },
  { title: "Execution", text: "From negotiation to due diligence to closing, we manage every step and keep you fully informed." },
];

const services = [
  {
    icon: TrendingUp,
    title: "Portfolio Strategy",
    text: "Build a diversified property portfolio aligned with your income, growth, and risk goals.",
    items: ["Asset allocation planning", "Yield vs. growth analysis", "Rebalancing recommendations"],
  },
  {
    icon: Calculator,
    title: "Investment Analysis",
    text: "Institutional-grade financial modelling on every opportunity before you commit.",
    items: ["Cash flow projections", "IRR & ROI modelling", "Sensitivity stress-testing"],
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    text: "Identify and mitigate the risks that can erode property returns over time.",
    items: ["Market downturn scenarios", "Liquidity analysis", "Insurance & liability review"],
  },
  {
    icon: Scale,
    title: "Tax & Structuring",
    text: "Optimise how you hold property to minimise tax and protect your assets.",
    items: ["Ownership structure advice", "Capital gains planning", "Cross-jurisdiction guidance"],
  },
  {
    icon: FileSearch,
    title: "Due Diligence",
    text: "Thorough investigation of every property — structural, legal, and financial.",
    items: ["Title & zoning checks", "Surveyor coordination", "Lease & tenancy review"],
  },
  {
    icon: Building2,
    title: "Acquisition & Sale",
    text: "Expert negotiation and transaction management on both sides of the deal.",
    items: ["Price negotiation", "Buyer/seller representation", "Closing coordination"],
  },
];

export default function Advisory() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-image" src={heroImg} alt="" />
        <div className="container page-hero-content">
          <span className="page-hero-eyebrow fade-up">
            <span className="dot" />
            Advisory Services
          </span>
          <h1 className="page-hero-title fade-up fade-up-delay-1">
            Investment advisory, built around you
          </h1>
          <p className="page-hero-subtitle fade-up fade-up-delay-2">
            From first acquisition to portfolio optimisation, we provide the
            strategic guidance and rigorous analysis to help you invest with
            confidence.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">How We Work</span>
            <h2 className="section-title">A proven four-step process</h2>
            <p className="section-subtitle">
              Structured, transparent, and tailored to you at every stage.
            </p>
          </div>
          <div className="advisory-process">
            {steps.map((s, i) => (
              <div key={s.title} className="advisory-step">
                <div className="advisory-step-num">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--brand-ivory)" }}>
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">What We Offer</span>
            <h2 className="section-title">Comprehensive advisory services</h2>
            <p className="section-subtitle">
              Everything you need to make, manage, and optimise property
              investments — all under one roof.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="service-card">
                <div className="feature-icon">
                  <s.icon />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul>
                  {s.items.map((item) => (
                    <li key={item}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story-img">
              <img src={heroImg} alt="Advisory consultation" />
            </div>
            <div className="about-story-text">
              <span className="section-eyebrow">Why It Matters</span>
              <h2>Advice that pays for itself</h2>
              <p>
                A single poor property decision can cost far more than a
                lifetime of good advice. Our clients work with us not just to
                find properties, but to avoid the costly mistakes that erode
                returns — overpaying, misjudging risk, or choosing the wrong
                structure.
              </p>
              <p>
                With ESTATEMENT, you get a partner who analyses every
                angle, challenges every assumption, and stands beside you from
                the first conversation to the final signature.
              </p>
              <div style={{ marginTop: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Wallet style={{ color: "var(--brand-gold)" }} />
                  <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>Transparent fees</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <ShieldCheck style={{ color: "var(--brand-gold)" }} />
                  <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>Aligned interests</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-band-inner">
            <div className="cta-band-text">
              <h2>Start with a free consultation</h2>
              <p>Thirty minutes with our team could reshape your property strategy for years to come.</p>
            </div>
            <div className="cta-band-actions">
              <Link to="/contact" className="btn btn-gold btn-lg">
                Book Your Session
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
