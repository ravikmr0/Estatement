import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react'
import { HeroSection } from '../components/HeroSection'

interface ContactUsProps {
  onNavigate?: (href: string) => void
}

const ContactUs = ({}: ContactUsProps) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Residential',
    location: 'Noida',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!submitted) return
    const timer = window.setTimeout(() => setSubmitted(false), 4200)
    return () => window.clearTimeout(timer)
  }, [submitted])

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    setForm({ name: '', phone: '', email: '', interest: 'Residential', location: 'Noida', message: '' })
  }

  return (
    <>
      <HeroSection
        eyebrow="Let's Talk Property"
        title="Connect With India's Leading Real Estate Consultants Today."
        description="Reach out to discuss your next home, commercial opportunity, plot purchase or investment advisory requirement."
        image="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80"
        showSlider={false}
      />

      <section className="section contact-detail reveal">
        <div className="contact-detail-grid">
          <div>
            <h3>Head Office</h3>
            <p>A-74A, Sector 136, Noida 201301</p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>+91-8750080023</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>estatementgroup@gmail.com</p>
          </div>
        </div>
      </section>

      <section className="section section-contact reveal">
        <div className="contact-panel">
          <div className="contact-copy">
            <span className="section-eyebrow">LET'S TALK PROPERTY.</span>
            <h2 className="section-title">Connect with India's Leading Real Estate Consultants Today.</h2>
            <p>
              Reach out to discuss your next home, commercial opportunity, plot purchase or investment advisory requirement.
            </p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} aria-live="polite">
            {submitted && (
              <div className="success-message">Thank you! Your consultation request has been received.</div>
            )}
            <label>
              Full Name
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>
            <label>
              Phone Number
              <input name="phone" value={form.phone} onChange={handleChange} required />
            </label>
            <label>
              Email Address
              <input name="email" type="email" value={form.email} onChange={handleChange} required />
            </label>
            <label>
              I'm Interested In
              <select name="interest" value={form.interest} onChange={handleChange}>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Plots</option>
                <option>Investment Advisory</option>
              </select>
            </label>
            <label>
              Preferred Location
              <input name="location" value={form.location} onChange={handleChange} />
            </label>
            <label>
              Message
              <textarea name="message" rows={4} value={form.message} onChange={handleChange} />
            </label>
            <button type="submit" className="button button-primary">
              Request a Consultation
            </button>
          </form>
        </div>
      </section>

      <section className="section map-panel reveal">
        <div className="section-heading">
          <p className="section-eyebrow">Find Us</p>
          <h2 className="section-title">Visit our Noida office for a premium consultation experience.</h2>
        </div>
        <div className="map-visual">
          <div className="map-overlay">
            <p>Map panel with the Noida office marker and surrounding corridor context.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs
