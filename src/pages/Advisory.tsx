import { Link } from "react-router-dom";
import { ArrowRight, Check, TrendingUp, ShieldCheck, Wallet, Building2, Calculator, FileSearch, Scale } from "lucide-react";
import "./pages.css";

const heroImg =
  "https://images.pexels.com/photos/7698712/pexels-photo-7698712.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600";
const whyItMattersImg =
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200";

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
            From choosing a first investment to reviewing an existing
            portfolio, we bring structure to the decision with local insight,
            practical analysis, and clear next steps.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">How We Work</span>
            <h2 className="section-title">A proven four-step process</h2>
            <p className="section-subtitle">
              A simple process that keeps your objectives visible and every
              important assumption open for discussion.
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
              Support for the decisions that matter before, during, and after
              a property transaction.
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
              <img src={whyItMattersImg} alt="Property advisors reviewing an investment decision" />
            </div>
            <div className="about-story-text">
              <span className="section-eyebrow">Why It Matters</span>
              <h2>Advice that pays for itself</h2>
              <p>
                A poor property decision can stay expensive for years. Our
                clients work with us not only to find opportunities, but also
                to avoid overpaying, overlooking legal or location risks, and
                choosing an asset that does not match their time horizon.
              </p>
              <p>
                With ESTATEMENT, you get a partner who reviews the numbers,
                asks the difficult questions, and explains the trade-offs from
                the first conversation to the final signature.
              </p>
              <div style={{ marginTop: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Wallet style={{ color: "var(--brand-gold)" }} />
                  <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>Clear engagement terms</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <ShieldCheck style={{ color: "var(--brand-gold)" }} />
                  <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>Advice matched to your goals</span>
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
