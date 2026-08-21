import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
} from "lucide-react";
import "./pages.css";

const heroImg =
  "https://images.pexels.com/photos/7433869/pexels-photo-7433869.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600";

const details = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91-8750080023",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@estatement.in | ajay@estatement.in",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "A-74A,SECTOR 136,Noida,Gautam Buddha Nagar,Uttar Pradesh,201305-India",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Fri, 9:00 AM – 6:00 PM IST",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    const errs: Record<string, string> = {};
    if (!name) errs.name = "Please enter your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email address.";
    if (!message) errs.message = "Please tell us how we can help.";

    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSent(true);
    form.reset();
  };

  return (
    <>
      <section className="page-hero">
        <img className="page-hero-image" src={heroImg} alt="" />
        <div className="container page-hero-content">
          <span className="page-hero-eyebrow fade-up">
            <span className="dot" />
            Get in Touch
          </span>
          <h1 className="page-hero-title fade-up fade-up-delay-1">
            Let's talk about your goals
          </h1>
          <p className="page-hero-subtitle fade-up fade-up-delay-2">
            Whether you are exploring a first purchase, a plot, a commercial
            opportunity, or a portfolio review, share a few details and our
            team will help you understand the next step.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info-card">
              <h2>Contact details</h2>
              <p>
                Reach out through any channel below, or use the form to tell us
                about your budget, preferred location, timeline, and property
                goals.
              </p>
              {details.map((d) => (
                <div key={d.label} className="contact-detail">
                  <div className="contact-detail-icon">
                    <d.icon />
                  </div>
                  <div>
                    <div className="contact-detail-label">{d.label}</div>
                    <div className="contact-detail-value">{d.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-form-card">
              <h2>Send us a message</h2>
              <p>Tell us what you are looking for. We will review your
                requirement and respond with the most relevant next step.</p>

              {sent && (
                <div className="form-success">
                  <CheckCircle2 />
                  Thank you! Your message has been sent. We'll be in touch within one business day.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Jane Smith"
                    />
                    {errors.name && <div className="form-error">{errors.name}</div>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                    />
                    {errors.email && <div className="form-error">{errors.email}</div>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone (optional)</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="interest">I'm interested in</label>
                    <select id="interest" name="interest" defaultValue="">
                      <option value="" disabled>Select a requirement</option>
                      <option value="buying">Buying a property</option>
                      <option value="selling">Selling a property</option>
                      <option value="advisory">Investment advisory</option>
                      <option value="portfolio">Portfolio review</option>
                      <option value="plots">YEIDA or plotted development</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your property goals, timeline, or any questions you have..."
                  />
                  {errors.message && <div className="form-error">{errors.message}</div>}
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
                  Send Message
                  <Send />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
