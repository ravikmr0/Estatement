import { useState } from 'react'
import type { Property } from '../data/constants'

interface PropertyFeaturesSectionProps {
  title: string
  eyebrow: string
  properties: Property[]
  onPropertyClick: (slug: string) => void
}

export const PropertyFeaturesSlider = ({
  title,
  eyebrow,
  properties,
  onPropertyClick,
}: PropertyFeaturesSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : Math.max(0, properties.length - itemsPerView)))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + itemsPerView < properties.length ? prev + 1 : 0))
  }

  const visibleProperties = properties.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <section className="section section-featured reveal">
      <div className="section-heading">
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </div>

      <div className="property-grid">
        {visibleProperties.map((property) => (
          <article key={property.id} className="property-card">
            <div className="property-image" style={{ backgroundImage: `url('${property.image}')` }} />
            <div className="property-body">
              <span className="property-tag">{property.category}</span>
              <h3>{property.title}</h3>
              <p className="property-location">{property.location}</p>
              <div className="property-meta">
                <span>{property.config}</span>
                <span>{property.price}</span>
              </div>
              <p className="property-description">{property.highlight}</p>
              <button
                className="property-cta"
                onClick={() => onPropertyClick(property.slug)}
                aria-label={`View ${property.title} property details`}
              >
                View Property →
              </button>
            </div>
          </article>
        ))}
      </div>

      {properties.length > itemsPerView && (
        <div className="slider-controls" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <button onClick={handlePrevious} aria-label="Previous properties" style={{ marginRight: '1rem' }}>
            ← Previous
          </button>
          <button onClick={handleNext} aria-label="Next properties">
            Next →
          </button>
        </div>
      )}
    </section>
  )
}
