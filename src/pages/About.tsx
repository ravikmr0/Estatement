import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Heart,
  Award,
} from "lucide-react";
import "./pages.css";

const storyImg =
  "https://images.pexels.com/photos/1181738/pexels-photo-1181738.jpeg?auto=compress&cs=tinysrgb&h=750&w=1000";

const values = [
  {
    icon: Target,
    title: "Integrity Over Volume",
    text: "We'd rather advise you to wait than push a deal that isn't right. Our reputation is built on honest guidance.",
  },
  {
    icon: Award,
    title: "Excellence in Detail",
    text: "Every analysis, every property, every conversation is held to the highest standard of thoroughness and rigor.",
  },
  {
    icon: Heart,
    title: "Long-Term Partnership",
    text: "We measure success in decades, not transactions. Your portfolio grows with us, not despite us.",
  },
];

const team = [
  {
    img: "https://images.pexels.com/photos/37148308/pexels-photo-37148308.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
    name: "James Whitfield",
    role: "Founder & Chief Advisor",
  },
  {
    img: "https://images.pexels.com/photos/31869537/pexels-photo-31869537.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
    name: "Sofia Marchetti",
    role: "Head of Investments",
  },
  {
    img: "https://images.pexels.com/photos/17049771/pexels-photo-17049771.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
    name: "Daniel Okafor",
    role: "Senior Property Advisor",
  },
  {
    img: "https://images.pexels.com/photos/37605831/pexels-photo-37605831.jpeg?auto=compress&cs=tinysrgb&h=400&w=400",
    name: "Marcus Chen",
    role: "Market Analyst",
  },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-image" src={storyImg} alt="" />
        <div className="container page-hero-content">
          <span className="page-hero-eyebrow fade-up">
            <span className="dot" />
            About Mira Estate
          </span>
          <h1 className="page-hero-title fade-up fade-up-delay-1">
            Built on trust, driven by data
          </h1>
          <p className="page-hero-subtitle fade-up fade-up-delay-2">
            For nearly two decades, we've helped investors and homeowners
            navigate complex property markets with clarity, integrity, and
            conviction.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story-img">
              <img src={storyImg} alt="Our team at work" />
            </div>
            <div className="about-story-text">
              <span className="section-eyebrow">Our Story</span>
              <h2>From a single office to a trusted advisory</h2>
              <p>
                Mira Estate Advisory was founded in 2007 with a simple
                conviction: property decisions deserve the same rigor as any
                major investment. Yet most buyers and investors were left to
                navigate the market alone, armed with little more than listing
                photos and gut feeling.
              </p>
              <p>
                We set out to change that. By combining deep market expertise
                with institutional-grade analysis, we built an advisory that
                treats every client's goal as our own benchmark for success.
              </p>
              <p>
                Today, we've guided over 850 clients through more than £2.4
                billion in property transactions — and we're just getting
                started.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--brand-ivory)" }}>
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">What We Stand For</span>
            <h2 className="section-title">Our core values</h2>
            <p className="section-subtitle">
              The principles that guide every recommendation, every
              conversation, and every relationship.
            </p>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <div className="feature-icon">
                  <v.icon />
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">Meet the Team</span>
            <h2 className="section-title">The people behind the advice</h2>
            <p className="section-subtitle">
              Seasoned professionals with decades of combined experience in
              real estate, finance, and market analysis.
            </p>
          </div>
          <div className="team-grid">
            {team.map((m) => (
              <div key={m.name} className="team-card">
                <div className="team-avatar">
                  <img src={m.img} alt={m.name} />
                </div>
                <h4>{m.name}</h4>
                <div className="team-role">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-band-inner">
            <div className="cta-band-text">
              <h2>Want to learn how we can help?</h2>
              <p>Explore our advisory services or get in touch with the team.</p>
            </div>
            <div className="cta-band-actions">
              <Link to="/advisory" className="btn btn-gold btn-lg">
                Advisory Services
                <ArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg" style={{ color: "var(--surface)", borderColor: "rgba(255,255,255,0.3)" }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
