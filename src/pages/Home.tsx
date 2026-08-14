import { useMemo } from 'react'
import { HeroSection } from '../components/HeroSection'
import { PropertyFeaturesSlider } from '../components/PropertyFeaturesSlider'
import { heroSlides, categoryCards, properties, whyItems } from '../data/constants'

interface HomeProps {
  onNavigate: (href: string) => void
}

const Home = ({ onNavigate }: HomeProps) => {
  const featuredProperties = useMemo(() => properties.slice(0, 4), [])

  const handlePropertyClick = (slug: string) => {
    onNavigate(`/properties/${slug}`)
  }

  const handleLinkClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    onNavigate(href)
  }

  return (
    <>
      <HeroSection
        slides={heroSlides}
        eyebrow="ESTATEMENT REALTY"
        title="Focused on Noida."
        description="Estatement Realty helps clients discover quality properties in established locations."
        image={heroSlides[0].image}
        showSlider={true}
      />

      <section className="section section-intro reveal">
        <div className="section-heading">
          <p className="section-eyebrow">ABOUT ESTATEMENT</p>
          <h2 className="section-title">A Focused Real Estate Advisory for Modern Buyers.</h2>
        </div>
        <div className="intro-grid">
          <div className="intro-copy">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
              alt="Modern building architecture"
              className="intro-image"
            />
          </div>
          <div className="intro-body">
            <p>
              Estatement Realty Pvt Ltd is a professionally driven real estate advisory company committed to helping
              homebuyers and investors make informed and confident property decisions.
            </p>
            <p>
              With a growing presence across Noida and the YEIDA growth corridor, we specialize in residential, commercial,
              plotted developments, and strategic investment opportunities.
            </p>
            <p>
              Our approach combines local market expertise, carefully selected opportunities, personalized advisory, and
              end-to-end support to deliver a seamless real estate experience.
            </p>
            <a href="/about-us" onClick={handleLinkClick('/about-us')} className="text-link">
              Explore Our Story →
            </a>
          </div>
        </div>
      </section>

      <section className="section section-categories reveal">
        <div className="section-heading">
          <p className="section-eyebrow">REAL ESTATE, ADVISED WITH PURPOSE.</p>
          <h2 className="section-title">Premium property categories shaped by clarity and context.</h2>
        </div>
        <div className="category-grid">
          {categoryCards.map((card, index) => (
            <article
              key={card.title}
              className="category-card"
              style={{ backgroundImage: `url('${card.image}')` }}
            >
              <div className="category-card-overlay" />
              <div className="category-card-copy">
                <span className="category-index">0{index + 1}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a href="/properties" onClick={handleLinkClick('/properties')}>
                  Explore <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PropertyFeaturesSlider
        title="Focused discovery for discerning buyers and investors."
        eyebrow="SELECTED PROPERTIES. EXCEPTIONAL POSSIBILITIES."
        properties={featuredProperties}
        onPropertyClick={handlePropertyClick}
      />

      <section className="section section-why reveal">
        <div className="section-heading">
          <p className="section-eyebrow">WHY ESTATEMENT?</p>
          <h2 className="section-title">A more considered advisory experience for premium property decisions.</h2>
        </div>
        <div className="why-grid">
          {whyItems.map((item) => (
            <article key={item.title} className="why-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>


    </>
  )
}

export default Home
