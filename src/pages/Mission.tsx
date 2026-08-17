import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, BarChart3, ShieldCheck, Leaf, Globe } from "lucide-react";
import "./pages.css";

const heroImg =
  "https://images.pexels.com/photos/30580640/pexels-photo-30580640.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600";

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
      <section className="page-hero">
        <img className="page-hero-image" src={heroImg} alt="" />
        <div className="container page-hero-content">
          <span className="page-hero-eyebrow fade-up">
            <span className="dot" />
            Our Purpose
          </span>
          <h1 className="page-hero-title fade-up fade-up-delay-1">
            Mission & Vision
          </h1>
          <p className="page-hero-subtitle fade-up fade-up-delay-2">
            The principles that drive every decision we make — and the future
            we're building toward alongside our clients.
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
                To empower every client with the clarity, data, and strategic
                guidance needed to make property decisions with total
                confidence. We exist to replace guesswork with rigor, and
                pressure with patience — ensuring that every investment we
                advise on is the right one for the person making it.
              </p>
            </div>
            <div className="mv-card vision">
              <div className="mv-icon"><Eye /></div>
              <h2>Our Vision</h2>
              <p>
                To be the most trusted name in property advisory — a firm where
                institutional-grade analysis meets genuine, client-first
                partnership. We envision a market where no one has to navigate
                a major property decision alone, and where every investment
                is made with eyes wide open.
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
              Four principles that shape how we analyse, advise, and act on
              behalf of every client.
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
                We believe property is too important — and too personal — to be
                treated as a transaction. That's why we invest heavily in
                research, take the time to understand your full financial
                picture, and stand beside you long after the deal closes.
              </p>
              <p>
                Whether you're buying your first home, expanding a portfolio, or
                planning an exit, our commitment is the same: honest guidance,
                rigorous analysis, and a partnership that lasts.
              </p>
              <div style={{ marginTop: 28 }}>
                <Link to="/about" className="btn btn-primary">
                  More About Us
                  <ArrowRight />
                </Link>
              </div>
            </div>
            <div className="about-story-img">
              <img src={heroImg} alt="Modern architecture" />
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
