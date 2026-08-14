import { HeroSection } from '../components/HeroSection'

interface MissionVisionProps {
  onNavigate: (href: string) => void
}

const MissionVision = ({ onNavigate }: MissionVisionProps) => {
  const handleLinkClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    onNavigate(href)
  }

  return (
    <>
      <HeroSection
        eyebrow="Our Purpose"
        title="Mission & Vision"
        description="Estatement Realty is committed to redefining real estate advisory with transparency, expertise and a client-first approach."
        image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
        showSlider={false}
      />

      <section className="section section-mission reveal">
        <div className="mission-grid">
          <div className="mission-copy">
            <span className="section-eyebrow">OUR PURPOSE</span>
            <h2 className="section-title">To Make Every Property Decision Transparent and Stress-Free.</h2>
            <p>
              Estatement Realty is built on trust, local expertise and an advisory mindset that puts the client's objectives first.
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
            <p>
              We are committed to understanding each client's unique needs and delivering personalized advisory that aligns with
              their financial objectives and life goals.
            </p>
          </article>
          <article>
            <h3>Vision</h3>
            <p>
              Establish Estatement Realty as a trusted and respected name in the real estate industry—recognized for market expertise,
              service excellence, integrity, and customer satisfaction.
            </p>
            <p>
              We aspire to be the preferred advisory partner for discerning buyers and investors across Noida, the YEIDA growth corridor,
              and the broader NCR region.
            </p>
          </article>
        </div>
      </section>

      <section className="section centered-cta reveal">
        <div className="cta-panel-inner">
          <h2>Let's Discuss Your Real Estate Goals</h2>
          <a href="/contact-us" onClick={handleLinkClick('/contact-us')} className="button button-primary">
            Connect With Us Today
          </a>
        </div>
      </section>
    </>
  )
}

export default MissionVision
