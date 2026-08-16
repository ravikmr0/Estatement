import { useState, useMemo } from 'react'
import { HeroSection } from '../components/HeroSection'
import {
  properties,
  propertyTypes,
  locationOptions,
  budgetOptions,
  configOptions,
} from '../data/constants'

interface PropertiesProps {
  onNavigate: (href: string) => void
}

const Properties = ({ onNavigate }: PropertiesProps) => {
  const [propertyType, setPropertyType] = useState('All')
  const [propertyLocation, setPropertyLocation] = useState('All')
  const [propertyBudget, setPropertyBudget] = useState('All')
  const [propertyConfig, setPropertyConfig] = useState('All')

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const typeMatch = propertyType === 'All' || property.category === propertyType || propertyType === 'Investment'
      const locationMatch = propertyLocation === 'All' || property.location.includes(propertyLocation)
      const budgetMatch = propertyBudget === 'All' || property.budget === propertyBudget
      const configMatch =
        propertyConfig === 'All' ||
        property.config.includes(propertyConfig) ||
        (propertyConfig === 'Premium Plot' && property.category === 'Plots')
      return typeMatch && locationMatch && budgetMatch && configMatch
    })
  }, [propertyType, propertyLocation, propertyBudget, propertyConfig])

  const handleLinkClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    onNavigate(href)
  }

  return (
    <>
      <HeroSection
        eyebrow="Our Portfolio"
        title="Discover Premium Real Estate Opportunities"
        description="Browse our carefully curated collection of residential, commercial and investment properties across Noida and the YEIDA growth corridor."
        image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
        showSlider={false}
      />

      <section className="section section-filter reveal">
        <div className="filter-panel">
          <div className="filter-group">
            <label>
              Property Type
              <select value={propertyType} onChange={(event) => setPropertyType(event.target.value)}>
                {propertyTypes.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="filter-group">
            <label>
              Location
              <select value={propertyLocation} onChange={(event) => setPropertyLocation(event.target.value)}>
                {locationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="filter-group">
            <label>
              Budget
              <select value={propertyBudget} onChange={(event) => setPropertyBudget(event.target.value)}>
                {budgetOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="filter-group">
            <label>
              Configuration
              <select value={propertyConfig} onChange={(event) => setPropertyConfig(event.target.value)}>
                {configOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="section section-property-list reveal">
        <div className="property-list-grid">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <article key={property.id} className="property-card property-card--list">
                <div className="property-image" style={{ backgroundImage: `url('${property.image}')` }} />
                <div className="property-body">
                  <span className="property-tag">{property.category}</span>
                  <h3>{property.title}</h3>
                  <p className="property-location">{property.location}</p>
                  <div className="property-meta">
                    <span>{property.type}</span>
                    <span>{property.config}</span>
                  </div>
                  <p className="property-price">{property.price}</p>
                  <p className="property-description">{property.highlight}</p>
                  <a
                    className="property-cta"
                    href={`/properties/${property.slug}`}
                    onClick={handleLinkClick(`/properties/${property.slug}`)}
                  >
                    View Details
                  </a>
                </div>
              </article>
            ))
          ) : (
            <div className="no-results">
              <p>No properties found matching your criteria. Please adjust your filters.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section centered-cta reveal">
        <div className="cta-panel-inner">
          <h2>Can't Find What You're Looking For?</h2>
          <p>
            Tell us what you are looking for and our advisors will help shortlist suitable opportunities that align with your
            priorities.
          </p>
          <a href="/contact-us" onClick={handleLinkClick('/contact-us')} className="button button-primary">
            Request a Consultation
          </a>
        </div>
      </section>
    </>
  )
}

export default Properties
