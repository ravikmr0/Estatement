import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

const PropertyDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    location: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const selectedProperty = projects.find((property) => property.slug === slug)

  useEffect(() => {
    if (!submitted) return
    const timer = window.setTimeout(() => setSubmitted(false), 4200)
    return () => window.clearTimeout(timer)
  }, [submitted])

  if (!selectedProperty) {
    return (
      <div className="not-found">
        <h1>Property Not Found</h1>
        <p>The property you're looking for doesn't exist.</p>
      </div>
    )
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    setForm({ name: '', phone: '', email: '', interest: '', location: '', message: '' })
  }

  return (
    <>
      <section className="section detail-hero reveal">
        <div className="detail-hero-image" style={{ backgroundImage: `url('${selectedProperty.img}')` }} />
        <div className="detail-hero-copy">
          <span className="eyebrow">Property Detail</span>
          <h1>{selectedProperty.title}</h1>
          <p className="property-location">{selectedProperty.location}</p>
          <div className="detail-meta">
            <span>{selectedProperty.type}</span>
            <span>{selectedProperty.config}</span>
          </div>
          <p className="property-price detail-price">{selectedProperty.price}</p>
          <div className="detail-metrics">
            <div>
              <strong>Status</strong>
              <p>{selectedProperty.status}</p>
            </div>
            <div>
              <strong>Area</strong>
              <p>{selectedProperty.area}</p>
            </div>
          </div>
          <Link to="/contact" className="button button-primary">
            Request Details
          </Link>
        </div>
      </section>

      <section className="section reveal">
        <div className="section-heading">
          <p className="section-eyebrow">About the Property</p>
          <h2 className="section-title">Property Overview</h2>
        </div>
        <p className="detail-description">{selectedProperty.description}</p>
      </section>

      <section className="section highlight-grid reveal">
        <article>
          <h3>Location</h3>
          <p>{selectedProperty.location}</p>
        </article>
        <article>
          <h3>Connectivity</h3>
          <p>Access to Noida Expressway, metro, and major arterial routes.</p>
        </article>
        <article>
          <h3>Amenities</h3>
          <p>Premium leisure, wellness and lifestyle facilities designed for elevated living.</p>
        </article>
        <article>
          <h3>Developer</h3>
          <p>{selectedProperty.developer}</p>
        </article>
        <article>
          <h3>Project Scale</h3>
          <p>Deliberately focused developments with quality architectural direction.</p>
        </article>
        <article>
          <h3>Investment Potential</h3>
          <p>{selectedProperty.investment}</p>
        </article>
      </section>

      <section className="section gallery-grid reveal">
        {selectedProperty.gallery.map((photo) => (
          <button
            key={photo}
            type="button"
            className="gallery-thumb"
            style={{ backgroundImage: `url('${photo}')` }}
            onClick={() => setLightboxImage(photo)}
            aria-label="Open photo"
          />
        ))}
      </section>

      <section className="section map-panel reveal">
        <div className="section-heading">
          <p className="section-eyebrow">Location</p>
          <h2 className="section-title">Prime access to the growth corridor.</h2>
        </div>
        <div className="map-visual">
          <div className="map-overlay">
            <p>Map placeholder for the Noida office and surrounding development nodes.</p>
          </div>
        </div>
      </section>

      <section className="section section-contact reveal">
        <div className="contact-panel">
          <div className="contact-copy">
            <span className="section-eyebrow">Interested in This Property?</span>
            <h2 className="section-title">Request a Callback</h2>
            <p>Our advisors will connect with you to discuss the details and next steps.</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} aria-live="polite">
            {submitted && <div className="success-message">Thank you! Your request has been received.</div>}
            <label>
              Name
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>
            <label>
              Phone
              <input name="phone" value={form.phone} onChange={handleChange} required />
            </label>
            <label>
              Email
              <input name="email" type="email" value={form.email} onChange={handleChange} required />
            </label>
            <label>
              Requirement
              <input name="interest" value={form.interest} onChange={handleChange} />
            </label>
            <label>
              Message
              <textarea name="message" rows={4} value={form.message} onChange={handleChange} />
            </label>
            <button type="submit" className="button button-primary">
              Request a Callback
            </button>
          </form>
        </div>
      </section>

      {lightboxImage && (
        <div
          className="lightbox"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-label="Full screen image viewer"
        >
          <img
            src={lightboxImage}
            alt="Property gallery"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

export default PropertyDetail
