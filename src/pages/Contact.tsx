import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  AlertCircle,
  Loader,
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
    value: "A-74A, Sector 136, Noida, Gautam Buddha Nagar, Uttar Pradesh 201305, India",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday – Friday, 9:00 AM – 6:00 PM IST",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (data: FormData): boolean => {
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    const errs: Record<string, string> = {};
    if (!name) errs.name = "Please enter your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email address.";
    if (!message) errs.message = "Please tell us how we can help.";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Client-side validation
    if (!validateForm(data)) {
      return;
    }

    // Clear previous errors
    setSubmitError(null);
    setLoading(true);

    try {
      // Prepare the request payload
      const payload = {
        name: (data.get("name") as string)?.trim(),
        email: (data.get("email") as string)?.trim(),
        phone: (data.get("phone") as string)?.trim() || undefined,
        interest: (data.get("interest") as string) || undefined,
        message: (data.get("message") as string)?.trim(),
      };

      // Send to the API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage =
          errorData.error || "Failed to submit your inquiry. Please try again.";
        setSubmitError(errorMessage);
        setLoading(false);
        return;
      }

      // Success!
      setSent(true);
      setSubmitError(null);
      form.reset();
      setLoading(false);

      // Reset the success message after 10 seconds
      setTimeout(() => {
        setSent(false);
      }, 10000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(
        "Unable to reach our server. Please check your connection and try again."
      );
      setLoading(false);
    }
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
                  <div>
                    <strong>Thank you! Your query has been successfully submitted.</strong>
                    <p>Our team will contact you shortly. A confirmation email has been sent to your email address.</p>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="form-error-message">
                  <AlertCircle />
                  <div>
                    <strong>Error</strong>
                    <p>{submitError}</p>
                  </div>
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
                      disabled={loading}
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
                      disabled={loading}
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
                      disabled={loading}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="interest">I'm interested in</label>
                    <select id="interest" name="interest" defaultValue="" disabled={loading}>
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
                    disabled={loading}
                  />
                  {errors.message && <div className="form-error">{errors.message}</div>}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg" 
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader size={18} className="spinner" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
