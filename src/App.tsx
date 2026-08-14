import { type ChangeEvent, type FormEvent, useEffect, useMemo, useState } from 'react'
import './App.css'

type Property = {
  id: number
  slug: string
  title: string
  location: string
  category: 'Residential' | 'Commercial' | 'Plots'
  type: string
  config: string
  price: string
  status: string
  area: string
  budget: string
  developer: string
  investment: string
  highlight: string
  description: string
  image: string
  gallery: string[]
}

const properties: Property[] = [
  {
    id: 1,
    slug: 'crest-residences',
    category: 'Residential',
    title: 'The Crest Residences',
    location: 'Sector 150, Noida',
    type: 'Luxury Residence',
    config: '3 BHK / 4 BHK',
    price: 'Starting ₹3.9 Cr*',
    status: 'Ready to Move',
    area: '2,900 sq ft',
    budget: '₹3 Cr - ₹7 Cr',
    developer: 'Aurora Estates',
    investment: 'Prime residential corridor',
    highlight: 'Large terraces, premium finishes and panoramic views.',
    description:
      'A refined residential collection designed for modern living and long-term value, positioned for discerning buyers seeking a premium retreat with strong location advantages.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 2,
    slug: 'apex-business-park',
    category: 'Commercial',
    title: 'Apex Business Park',
    location: 'Noida Expressway',
    type: 'Commercial Investment',
    config: 'Grade-A Office & Retail',
    price: 'Starting ₹10.2 Cr*',
    status: 'Under Construction',
    area: '9,000 sq ft - 30,000 sq ft',
    budget: 'Above ₹7 Cr',
    developer: 'Solace Developments',
    investment: 'Strategic commercial corridor',
    highlight: 'Visibility, connectivity and strong leasing appeal.',
    description:
      'Strategic commercial spaces positioned for visibility, connectivity and long-term demand. A premium investment option with well-considered location fundamentals.',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 3,
    slug: 'golden-meadows',
    category: 'Plots',
    title: 'Golden Meadows',
    location: 'YEIDA Growth Corridor',
    type: 'Premium Plot',
    config: 'Premium Plot',
    price: 'Expected ₹2.2 Cr*',
    status: 'Released',
    area: '200 sqm - 520 sqm',
    budget: 'Under ₹3 Cr',
    developer: 'Vista Landcraft',
    investment: 'Growth-oriented plot development',
    highlight: 'Quiet township setting with future corridor potential.',
    description:
      'Curated plotted development opportunities in the YEIDA growth corridor, designed for long-term value and future community potential.',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    id: 4,
    slug: 'silk-avenue',
    category: 'Residential',
    title: 'Silk Avenue',
    location: 'Greater Noida',
    type: 'Premium Apartments',
    config: '2 BHK / 3 BHK',
    price: 'Starting ₹2.4 Cr*',
    status: 'New Launch',
    area: '1,200 sq ft - 2,100 sq ft',
    budget: '₹3 Cr - ₹7 Cr',
    developer: 'Luminous Realty',
    investment: 'High-growth residential location',
    highlight: 'Modern concierge living near urban amenities.',
    description:
      'An elegant residential address crafted for buyers who value quality, curation, and an elevated urban lifestyle.',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80',
    ],
  },
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Mission & Vision', href: '/mission-vision' },
  { label: 'Properties', href: '/properties' },
  { label: 'Investment Advisory', href: '/investment-advisory' },
  { label: 'Contact Us', href: '/contact-us' },
]

const propertyTypes = ['All', 'Residential', 'Commercial', 'Plots', 'Investment']
const locationOptions = ['All', 'Noida', 'Greater Noida', 'YEIDA', 'Noida Expressway']
const budgetOptions = ['All', 'Under ₹3 Cr', '₹3 Cr - ₹7 Cr', 'Above ₹7 Cr']
const configOptions = ['All', '2 BHK', '3 BHK', '4 BHK', 'Premium Plot']

const normalizePath = (path: string) => path.replace(/\\+/g, '/').replace(/\/$/, '') || '/'

function App() {
  const [currentPath, setCurrentPath] = useState(normalizePath(window.location.pathname))
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [featuredFilter, setFeaturedFilter] = useState('All')
  const [propertyType, setPropertyType] = useState('All')
  const [propertyLocation, setPropertyLocation] = useState('All')
  const [propertyBudget, setPropertyBudget] = useState('All')
  const [propertyConfig, setPropertyConfig] = useState('All')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Residential',
    location: 'Noida',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [heroSlideIndex, setHeroSlideIndex] = useState(0)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
      eyebrow: 'ESTATEMENT REALTY',
      title: 'Focused on Noida.',
      supportingText: 'Premium residences and commercial opportunities across Noida.',
      description:
        'Estatement Realty helps clients discover quality properties in established locations with strong infrastructure, connectivity and long-term growth potential.',
      location: 'Noida',
    },
    {
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
      eyebrow: 'ESTATEMENT REALTY',
      title: 'Focused on Noida Expressway.',
      supportingText: 'Residential and commercial opportunities along Noida Expressway.',
      description:
        'Explore strategically located properties across one of NCR’s key growth corridors, supported by excellent connectivity and evolving infrastructure.',
      location: 'Noida Expressway',
    },
    {
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
      eyebrow: 'ESTATEMENT REALTY',
      title: 'Focused on Greater Noida.',
      supportingText: 'Residences, commercial spaces and emerging investment opportunities.',
      description:
        'Estatement Realty connects clients with carefully selected properties in high-potential locations shaped by planned development, infrastructure and strategic connectivity.',
      location: 'Greater Noida',
    },
    {
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80',
      eyebrow: 'ESTATEMENT REALTY',
      title: 'Focused on YEIDA.',
      supportingText: 'YEIDA Authority Plots and strategic real estate opportunities.',
      description:
        'Discover opportunities across the YEIDA region, positioned around major infrastructure developments, connectivity and the future growth of the NCR.',
      location: 'YEIDA',
    },
  ]

  const categoryCards = [
    {
      title: 'Luxury Residences',
      description: 'Curated homes for refined living across the city’s most desirable corridors.',
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'Commercial Opportunities',
      description: 'Strategic spaces chosen for visibility, leasing appeal and long-term demand.',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'Premium Plots',
      description: 'Land parcels in emerging corridors selected for clarity, location and future potential.',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'Strategic Investments',
      description: 'Opportunities evaluated with a long-term view, risk awareness and market context.',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
    },
  ]

  const whyItems = [
    {
      title: 'Market Expertise',
      description: 'Deep understanding of Noida and the YEIDA growth corridor.',
    },
    {
      title: 'Curated Opportunities',
      description: 'Carefully selected properties rather than simply presenting listings.',
    },
    {
      title: 'Transparent Advisory',
      description: 'Clear and straightforward property guidance at every stage.',
    },
    {
      title: 'Personalized Guidance',
      description: 'Recommendations aligned with individual priorities and objectives.',
    },
    {
      title: 'End-to-End Support',
      description: 'Professional assistance throughout the property journey.',
    },
  ]

  const journeySteps = [
    { step: 'DISCOVER', label: 'Discover' },
    { step: 'SHORTLIST', label: 'Shortlist' },
    { step: 'EVALUATE', label: 'Evaluate' },
    { step: 'DECIDE', label: 'Decide' },
    { step: 'COMPLETE', label: 'Complete' },
  ]

  const advisoryPoints = [
    'Market Understanding',
    'Opportunity Screening',
    'Property Evaluation',
    'Personalized Strategy',
    'Transaction Support',
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    const updatePath = () => setCurrentPath(normalizePath(window.location.pathname))

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('popstate', updatePath)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('popstate', updatePath)
    }
  }, [])

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setHeroSlideIndex((index) => (index + 1) % heroSlides.length)
    }, 6000)

    return () => window.clearInterval(slideTimer)
  }, [heroSlides.length])

  const showPreviousSlide = () => {
    setHeroSlideIndex((index) => (index - 1 + heroSlides.length) % heroSlides.length)
  }

  const showNextSlide = () => {
    setHeroSlideIndex((index) => (index + 1) % heroSlides.length)
  }

  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 },
    )

    reveals.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [currentPath])

  useEffect(() => {
    if (!submitted) return
    const timer = window.setTimeout(() => setSubmitted(false), 4200)
    return () => window.clearTimeout(timer)
  }, [submitted])

  const navigate = (href: string) => {
    const normalized = normalizePath(href)
    if (normalized === currentPath) return
    window.history.pushState({}, '', normalized)
    setCurrentPath(normalized)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const onLinkClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    navigate(href)
    setMobileMenuOpen(false)
  }

  const featuredProperties = useMemo(
    () => properties.filter((property) => featuredFilter === 'All' || property.category === featuredFilter),
    [featuredFilter],
  )

  const filteredProperties = useMemo(
    () =>
      properties.filter((property) => {
        const typeMatch = propertyType === 'All' || property.category === propertyType || propertyType === 'Investment'
        const locationMatch = propertyLocation === 'All' || property.location.includes(propertyLocation)
        const budgetMatch = propertyBudget === 'All' || property.budget === propertyBudget
        const configMatch =
          propertyConfig === 'All' ||
          property.config.includes(propertyConfig) ||
          (propertyConfig === 'Premium Plot' && property.category === 'Plots')
        return typeMatch && locationMatch && budgetMatch && configMatch
      }),
    [propertyType, propertyLocation, propertyBudget, propertyConfig],
  )

  const currentDetailSlug = currentPath.startsWith('/properties/') ? currentPath.replace('/properties/', '') : ''
  const activePath = currentPath.startsWith('/properties/') ? '/properties' : currentPath
  const selectedProperty = properties.find((property) => property.slug === currentDetailSlug)

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    setForm({ name: '', phone: '', email: '', interest: 'Residential', location: 'Noida', message: '' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="page-shell">
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <a href="/" onClick={onLinkClick('/')} className="brand-mark">
            Estatement
          </a>
          <nav className="main-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onLinkClick(link.href)}
                className={`nav-link ${activePath === link.href ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a href="/contact-us" onClick={onLinkClick('/contact-us')} className="nav-cta">
              Talk to an Advisor
            </a>
            <button
              type="button"
              className="mobile-toggle"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              Menu
            </button>
          </div>
        </div>
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onLinkClick(link.href)}
                className={`mobile-link ${activePath === link.href ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a href="/contact-us" onClick={onLinkClick('/contact-us')} className="mobile-cta">
            Talk to an Advisor
          </a>
        </div>
      </header>

      <main className="page-content">
        {currentPath === '/' && (
          <>
            <section
              className="hero-section reveal"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(3, 75, 64, 0.34), rgba(3, 75, 64, 0.82)), url('${heroSlides[heroSlideIndex].image}')`,
              }}
            >
              <div className="hero-slide-controls">
                <button type="button" className="hero-slide-button prev" onClick={showPreviousSlide} aria-label="Previous slide">
                  ‹
                </button>
                <button type="button" className="hero-slide-button next" onClick={showNextSlide} aria-label="Next slide">
                  ›
                </button>
              </div>
              <div className="hero-panel">
                <span className="hero-eyebrow">{heroSlides[heroSlideIndex].eyebrow}</span>
                <div className="hero-accent-line" />
                <h1 className="hero-title">{heroSlides[heroSlideIndex].title}</h1>
                <p className="hero-copy">
                  {heroSlides[heroSlideIndex].supportingText}
                  <br /><br />
                  {heroSlides[heroSlideIndex].description}
                  <br /><br />
                  {heroSlides[heroSlideIndex].location}
                </p>
              </div>
              <div className="scroll-indicator" aria-hidden="true">
                <span className="dot" />
                <span>Scroll</span>
              </div>
            </section>

            <section className="section section-intro reveal">
              <div className="section-heading">
                <p className="section-eyebrow">ABOUT ESTATEMENT</p>
                <h2 className="section-title">A Focused Real Estate Advisory for Modern Buyers.</h2>
              </div>
              <div className="intro-grid">
                <div className="intro-copy">
                  <p className="intro-pretitle">A Focused Real Estate Advisory for Modern Buyers.</p>
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
                  <a href="/about-us" onClick={onLinkClick('/about-us')} className="text-link">
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
                      <a href="/properties" onClick={onLinkClick('/properties')}>
                        Explore <span>→</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="section section-featured reveal">
              <div className="section-heading">
                <p className="section-eyebrow">SELECTED PROPERTIES. EXCEPTIONAL POSSIBILITIES.</p>
                <h2 className="section-title">Focused discovery for discerning buyers and investors.</h2>
              </div>
              <div className="filter-tabs" role="tablist" aria-label="Property filters">
                {['All', 'Residential', 'Commercial', 'Plots'].map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={`filter-pill ${featuredFilter === filter ? 'active' : ''}`}
                    onClick={() => setFeaturedFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <div className="property-grid">
                {featuredProperties.map((property) => (
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
                      <a
                        className="property-cta"
                        href={`/properties/${property.slug}`}
                        onClick={onLinkClick(`/properties/${property.slug}`)}
                      >
                        View Property →
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>

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

            <section className="section section-locations reveal">
              <div className="section-heading">
                <p className="section-eyebrow">POSITIONED AROUND INDIA'S NEXT GROWTH CORRIDOR.</p>
                <h2 className="section-title">Focused on Noida, Noida Expressway, Greater Noida and YEIDA.</h2>
              </div>
              <div className="location-panel">
                <div className="location-copy">
                  <p>
                    Estatement Realty is positioned to guide clients through the most compelling growth pockets in the NCR,
                    with a primary focus on quality locations, infrastructure and strategic connectivity.
                  </p>
                  <div className="location-grid-cards">
                    {['Noida', 'Noida Expressway', 'Greater Noida', 'YEIDA'].map((place) => (
                      <div key={place} className="location-card">
                        <span>{place}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="location-visual" />
              </div>
            </section>

            <section className="section section-mission reveal">
              <div className="mission-grid">
                <div className="mission-copy">
                  <span className="section-eyebrow">MISSION & VISION</span>
                  <h2 className="section-title">To Make Every Property Decision Transparent and Stress-Free.</h2>
                  <p>
                    Estatement Realty is built on trust, local expertise and an advisory mindset that puts the client’s objectives first.
                    We deliver clarity, thoughtful guidance and a seamless experience from first contact to closing.
                  </p>
                </div>
                <div className="mission-visual" />
              </div>
              <div className="mission-detail-grid">
                <article>
                  <h3>Mission</h3>
                  <p>
                    Simplify the real estate journey by providing transparent information, professional guidance and carefully selected
                    property opportunities that help clients make confident decisions.
                  </p>
                </article>
                <article>
                  <h3>Vision</h3>
                  <p>
                    Establish Estatement Realty as a trusted and respected name in the real estate industry—recognized for market expertise,
                    service excellence, integrity, and customer satisfaction.
                  </p>
                </article>
              </div>
            </section>

            {/* Removed journey, advisory and contact sections from landing page per request */}
          </>
        )}

        {currentPath === '/about-us' && (
          <>
            <section
              className="hero-section reveal"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(3, 75, 64, 0.28), rgba(3, 75, 64, 0.82)), url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80')",
              }}
            >
              <div className="hero-panel">
                <span className="hero-eyebrow">About Estatement</span>
                <div className="hero-accent-line" />
                <h1 className="hero-title">A More Thoughtful Approach to Real Estate.</h1>
                <p className="hero-copy">
                  Estatement Realty offers a premium advisory experience shaped by market insight, transparency, and long-term thinking.
                </p>
              </div>
            </section>

            <section className="section section-about reveal">
              <div className="about-grid">
                <div>
                  <span className="section-eyebrow">ABOUT ESTATEMENT</span>
                  <h2 className="section-title">A Focused Real Estate Advisory for Modern Buyers.</h2>
                </div>
                <div className="about-copy">
                  <p>
                    Estatement Realty Pvt Ltd is a professionally driven real estate advisory company committed to helping homebuyers
                    and investors make informed and confident property decisions.
                  </p>
                  <p>
                    With a growing presence across Noida and the YEIDA growth corridor, we specialize in residential, commercial,
                    plotted developments, and strategic investment opportunities.
                  </p>
                  <p>
                    Our approach combines local market expertise, carefully selected opportunities, personalized advisory, and
                    end-to-end support to deliver a seamless real estate experience.
                  </p>
                  <p>
                    Built on the principles of trust, transparency, and professionalism, we aim to go beyond property transactions by
                    building lasting relationships and creating long-term value for our clients and partners.
                  </p>
                </div>
              </div>
            </section>

            <section className="section why-grid reveal">
              {whyItems.slice(0, 4).map((item) => (
                <article key={item.title} className="why-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </section>

            <section className="section centered-cta reveal">
              <div className="cta-panel-inner">
                <h2>Let's Find the Right Opportunity for You.</h2>
                <a href="/contact-us" onClick={onLinkClick('/contact-us')} className="button button-primary">
                  Talk to an Advisor
                </a>
              </div>
            </section>
          </>
        )}

        {currentPath === '/mission-vision' && (
          <>
            <section
              className="hero-section reveal"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(3, 75, 64, 0.36), rgba(3, 75, 64, 0.82)), url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80')",
              }}
            >
              <div className="hero-panel">
                <span className="hero-eyebrow">Mission & Vision</span>
                <div className="hero-accent-line" />
                <h1 className="hero-title">Making Every Property Decision Transparent and Stress-Free.</h1>
                <p className="hero-copy">
                  Estatement’s mission is to help clients make confident decisions with clear information and professional guidance.
                </p>
              </div>
            </section>

            <section className="section section-mission reveal">
              <div className="mission-grid">
                <div className="mission-copy">
                  <span className="section-eyebrow">MISSION & VISION</span>
                  <h2 className="section-title">A refined editorial view on advisory and outcomes.</h2>
                  <p>
                    Estatement offers mission-led service and a vision of clear, honest advisory for buyers and investors who value
                    long-term clarity.
                  </p>
                </div>
                <div className="mission-visual" />
              </div>
              <div className="mission-detail-grid">
                <article>
                  <h3>Mission</h3>
                  <p>
                    Our mission is to simplify the real estate journey by providing transparent information, professional guidance,
                    and carefully selected property opportunities that help clients make confident decisions.
                  </p>
                </article>
                <article>
                  <h3>Vision</h3>
                  <p>
                    Our vision is to establish Estatement Realty as a trusted and respected name in the real estate industry—recognized
                    for market expertise, service excellence, integrity, and customer satisfaction.
                  </p>
                </article>
              </div>
            </section>

            <section className="section section-journey reveal">
              <div className="section-heading">
                <p className="section-eyebrow">OUR APPROACH</p>
                <h2 className="section-title">Understand → Curate → Evaluate → Advise → Support</h2>
              </div>
              <div className="journey-grid">
                {journeySteps.map((item, index) => (
                  <article key={item.step} className="journey-card">
                    <div className="journey-number">0{index + 1}</div>
                    <h3>{item.step}</h3>
                    <p className="journey-description">
                      {item.step === 'DISCOVER'
                        ? 'Clarify requirements, risk tolerance, and long-term intent.'
                        : item.step === 'SHORTLIST'
                        ? 'Select a refined set of opportunities aligned to your criteria.'
                        : item.step === 'EVALUATE'
                        ? 'Review location, fundamentals, pricing, and positioning.'
                        : item.step === 'DECIDE'
                        ? 'Provide clear guidance tailored to your objectives.'
                        : 'Assist through the transaction and closing process.'}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="section centered-cta reveal">
              <div className="cta-panel-inner">
                <h2>Property decisions are important. The advice behind them should be too.</h2>
                <a href="/contact-us" onClick={onLinkClick('/contact-us')} className="button button-primary">
                  Start a Conversation
                </a>
              </div>
            </section>
          </>
        )}

        {currentPath === '/properties' && (
          <>
            <section
              className="hero-section reveal"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(3, 75, 64, 0.36), rgba(3, 75, 64, 0.82)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
              }}
            >
              <div className="hero-panel">
                <span className="hero-eyebrow">Explore Our Properties</span>
                <div className="hero-accent-line" />
                <h1 className="hero-title">Opportunities Selected With Purpose.</h1>
                <p className="hero-copy">
                  Explore carefully selected residential, commercial, plotted and investment opportunities across high-growth locations.
                </p>
              </div>
            </section>

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
                {filteredProperties.map((property) => (
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
                        onClick={onLinkClick(`/properties/${property.slug}`)}
                      >
                        View Details
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="section centered-cta reveal">
              <div className="cta-panel-inner">
                <h2>Can't Find What You're Looking For?</h2>
                <p>
                  Tell us what you are looking for and our advisors will help shortlist suitable opportunities that align with your
                  priorities.
                </p>
                <a href="/contact-us" onClick={onLinkClick('/contact-us')} className="button button-primary">
                  Request a Consultation
                </a>
              </div>
            </section>
          </>
        )}

        {currentPath.startsWith('/properties/') && selectedProperty && (
          <>
            <section className="section detail-hero reveal">
              <div className="detail-hero-image" style={{ backgroundImage: `url('${selectedProperty.image}')` }} />
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
                <a href="/contact-us" onClick={onLinkClick('/contact-us')} className="button button-primary">
                  Request Details
                </a>
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
          </>
        )}

        {currentPath === '/investment-advisory' && (
          <>
            <section
              className="hero-section reveal"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(3, 75, 64, 0.36), rgba(3, 75, 64, 0.82)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
              }}
            >
              <div className="hero-panel">
                <span className="hero-eyebrow">Invest With Perspective</span>
                <div className="hero-accent-line" />
                <h1 className="hero-title">Real Estate Opportunities Evaluated Beyond the Brochure.</h1>
                <p className="hero-copy">
                  Estatement takes a careful advisory approach to help you understand property opportunities without promises of
                  guaranteed returns.
                </p>
              </div>
            </section>

            <section className="section approach-grid reveal">
              <div className="advisory-grid">
                {advisoryPoints.map((point) => (
                  <article key={point} className="advisory-card">
                    <h3>{point}</h3>
                    <p>
                      {point === 'Market Understanding'
                        ? 'Evaluate the broader location and development environment before recommending opportunities.'
                        : point === 'Opportunity Screening'
                        ? 'Focus on carefully selected opportunities with value and clear positioning.'
                        : point === 'Property Evaluation'
                        ? 'Review property fundamentals, pricing and market positioning with professional context.'
                        : point === 'Personalized Strategy'
                        ? 'Align opportunities with your objectives, risk appetite and investment horizon.'
                        : 'Provide assistance through due diligence, negotiation and closing.'}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="section centered-cta reveal">
              <div className="cta-panel-inner">
                <h2>Discuss Your Investment Objective</h2>
                <a href="/contact-us" onClick={onLinkClick('/contact-us')} className="button button-primary">
                  Discuss Your Investment Objective
                </a>
              </div>
            </section>
          </>
        )}

        {currentPath === '/contact-us' && (
          <>
            <section
              className="hero-section reveal"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(3, 75, 64, 0.28), rgba(3, 75, 64, 0.82)), url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80')",
              }}
            >
              <div className="hero-panel">
                <span className="hero-eyebrow">Let's Talk Property</span>
                <div className="hero-accent-line" />
                <h1 className="hero-title">Connect With India's Leading Real Estate Consultants Today.</h1>
                <p className="hero-copy">
                  Reach out to discuss your next home, commercial opportunity, plot purchase or investment advisory requirement.
                </p>
              </div>
            </section>

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
                  {submitted && <div className="success-message">Thank you! Your consultation request has been received.</div>}
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
        )}

        {currentPath === '/privacy-policy' && (
          <section className="section legal-panel reveal">
            <div className="section-heading">
              <p className="section-eyebrow">Privacy Policy</p>
              <h2 className="section-title">How We Protect Your Information</h2>
            </div>
            <div className="legal-content">
              <p>
                We collect information through this site only when you contact us or request a consultation. This includes
                details such as your name, email, phone number, interest type and message.
              </p>
              <p>
                Information is used to respond to inquiries, manage consultation requests, and deliver advisory services.
                We do not sell your personal data to third parties.
              </p>
              <p>
                Cookies are used to improve site performance and user experience. Third-party analytics may be used for
                anonymous traffic insights and website optimization.
              </p>
              <p>
                We take reasonable steps to keep your data secure. If you have privacy questions, please contact us at
                estatementgroup@gmail.com.
              </p>
            </div>
          </section>
        )}

        {currentPath === '/terms-and-conditions' && (
          <section className="section legal-panel reveal">
            <div className="section-heading">
              <p className="section-eyebrow">Terms & Conditions</p>
              <h2 className="section-title">Information, Use and Disclaimers</h2>
            </div>
            <div className="legal-content">
              <p>
                This website is provided for informational purposes only. Property information, pricing, availability and
                specifications may change and should be independently verified before making any property transaction.
              </p>
              <p>
                Property images, descriptions and details are representative. Estatement Realty does not guarantee the
                accuracy of every feature, price or specification.
              </p>
              <p>
                Investment information is advisory in nature and does not constitute a promise of return, appreciation, profit,
                or performance. Prospective buyers should conduct their own due diligence.
              </p>
              <p>
                All intellectual property on this site belongs to Estatement Realty Pvt Ltd. Unauthorized use of the website
                content is prohibited.
              </p>
            </div>
          </section>
        )}
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <p className="footer-logo">Estatement Realty</p>
            <p className="footer-tagline">Where Property Becomes a Statement</p>
            <p className="footer-copy">
              A premium real estate advisory grounded in market insight and thoughtful property guidance across Noida and the broader NCR.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Company</h4>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={onLinkClick(link.href)}>
                  {link.label}
                </a>
              ))}
            </div>
            <div>
              <h4>Services</h4>
              <a href="/properties" onClick={onLinkClick('/properties')}>
                Properties
              </a>
              <a href="/investment-advisory" onClick={onLinkClick('/investment-advisory')}>
                Investment Advisory
              </a>
              <a href="/contact-us" onClick={onLinkClick('/contact-us')}>
                Consult an Advisor
              </a>
            </div>
            <div>
              <h4>Connect</h4>
              <a href="tel:+918750080023">+91-8750080023</a>
              <a href="mailto:estatementgroup@gmail.com">estatementgroup@gmail.com</a>
              <address>A-74A, Sector 136, Noida 201301</address>
              <div className="footer-social">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.1v-2.9h2.1V9.5c0-2.1 1.3-3.3 3.2-3.3.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.4h2.3l-.4 2.9h-1.9v7A10 10 0 0 0 22 12" />
                  </svg>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer" aria-label="X">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M22 5.6c-.8.4-1.6.6-2.4.8.9-.6 1.6-1.4 1.9-2.4-.8.5-1.7.8-2.6 1-1.4-1.4-3.7-1.4-5.1-.1-1.1 1.1-1.4 2.8-.8 4.2-3.3-.2-6.4-1.8-8.4-4.2-.7 1.2-.4 2.8.6 3.6-.7 0-1.4-.2-2-.5v.1c0 1.9 1.3 3.5 3.2 3.9-.6.2-1.2.2-1.8.1.5 1.6 2 2.8 3.8 2.8-1.4 1.1-3.1 1.8-4.9 1.8H5c1.7 1.1 3.8 1.8 5.9 1.8 7.1 0 11-5.9 11-11v-.5c.8-.6 1.5-1.4 2-2.2" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3V9zm7 0h3.7v1.7h.1c.5-1 1.8-2.1 3.8-2.1 4.1 0 4.8 2.7 4.8 6.1V21h-4v-5.4c0-1.3 0-3-1.8-3-1.8 0-2 1.4-2 2.9V21h-4V9z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="/privacy-policy" onClick={onLinkClick('/privacy-policy')}>
                Privacy Policy
              </a>
              <a href="/terms-and-conditions" onClick={onLinkClick('/terms-and-conditions')}>
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
        <div className="footer-note">© Estatement Realty Pvt Ltd. All Rights Reserved.</div>
      </footer>

      {lightboxImage && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightboxImage(null)}>
          <button type="button" className="lightbox-close" onClick={() => setLightboxImage(null)}>
            Close
          </button>
          <img src={lightboxImage} alt="Property gallery" />
        </div>
      )}
    </div>
  )
}

export default App
