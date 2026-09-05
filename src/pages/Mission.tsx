import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, BarChart3, ShieldCheck, Leaf, Globe } from "lucide-react";
import "./pages.css";

const heroImg =
  "/hero/mission_hero.png";

const pillars = [
  {
    num: "01",
    icon: BarChart3,
    title: "Analytical Rigor",
    text: "Every decision is grounded in data — comparable sales, yield models, and forward-looking market indicators.",
  },
  {
    num: "02",
    icon: ShieldCheck,
    title: "Client Protection",
    text: "We stress-test opportunities against downturns and liquidity risk before they ever reach your shortlist.",
  },
  {
    num: "03",
    icon: Leaf,
    title: "Sustainable Growth",
    text: "We favour long-term value creation over short-term gains, including energy-efficient and future-proofed assets.",
  },
  {
    num: "04",
    icon: Globe,
    title: "Market Intelligence",
    text: "Our team constantly monitors zoning, infrastructure, and demographic shifts that shape property values.",
  },
];

export default function Mission() {
  return (
    <>
      <section className="page-hero mission-hero">
        <img className="page-hero-image" src={heroImg} alt="" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title fade-up fade-up-delay-1">
            Mission & Vision
          </h1>
          <p className="page-hero-subtitle fade-up fade-up-delay-2">
            Building trust in NCR real estate today, while shaping our
            presence across the global property market. From Noida and
            Delhi-NCR to Dubai, the UK, and Australia, we're expanding our
            expertise across high-potential international markets. We combine
            local market intelligence, strategic advisory, and a long-term
            investment mindset to help clients make smarter property
            decisions. Our vision is simple: connect people with the right
            real estate opportunities — locally and globally.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mission">
              <div className="mv-icon"><Target /></div>
              <h2>Our Mission</h2>
              <p>
                To give every client the clarity, context, and practical
                guidance needed to make a well-informed property decision. We
                replace guesswork and sales pressure with patient evaluation,
                transparent communication, and advice that reflects the
                client's actual priorities.
              </p>
            </div>
            <div className="mv-card vision">
              <div className="mv-icon"><Eye /></div>
              <h2>Our Vision</h2>
              <p>
                To become a trusted property advisory partner across Noida and
                the wider NCR: known for honest recommendations, local market
                understanding, and dependable support from research through
                transaction. We want every client to move forward with a clear
                view of both opportunity and risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--brand-ivory)" }}>
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">Strategic Pillars</span>
            <h2 className="section-title">The foundations of our approach</h2>
            <p className="section-subtitle">
              Four principles that shape how we research, advise, and act on
              behalf of every client and every property brief.
            </p>
          </div>
          <div className="pillars-grid">
            {pillars.map((p) => (
              <div key={p.num} className="pillar-card">
                <div className="pillar-num">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story-text">
              <span className="section-eyebrow">Our Commitment</span>
              <h2>Advice you can build a future on</h2>
              <p>
                Property is too important and too personal to be treated as a
                quick transaction. We take time to understand your financial
                picture, study the location and project fundamentals, and
                explain the decision in language that is easy to act on.
              </p>
              <p>
                Whether you are buying your first home, expanding a portfolio,
                selecting a plot, or planning an exit, our commitment stays
                the same: honest guidance, relevant analysis, and support that
                continues beyond the first meeting.
              </p>
              <div style={{ marginTop: 28 }}>
                <Link to="/about" className="btn btn-primary">
                  More About Us
                  <ArrowRight />
                </Link>
              </div>
            </div>
            <div className="about-story-img">
              <img src="/property/arqis_mall.png" alt="ARQIS MALL" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-band-inner">
            <div className="cta-band-text">
              <h2>Let's align on your goals</h2>
              <p>Book a consultation to see how our mission translates into action for your portfolio.</p>
            </div>
            <div className="cta-band-actions">
              <Link to="/contact" className="btn btn-gold btn-lg">
                Get Started
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
