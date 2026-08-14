import { HeroSection } from '../components/HeroSection'
import { whyItems } from '../data/constants'

interface AboutUsProps {
  onNavigate: (href: string) => void
}

const AboutUs = ({ onNavigate }: AboutUsProps) => {
  const handleLinkClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    onNavigate(href)
  }

  return (
    <>
      <HeroSection
        eyebrow="About Estatement"
        title="A More Thoughtful Approach to Real Estate."
        description="Estatement Realty offers a premium advisory experience shaped by market insight, transparency, and long-term thinking."
        image="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80"
        showSlider={false}
      />

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
          <a href="/contact-us" onClick={handleLinkClick('/contact-us')} className="button button-primary">
            Talk to an Advisor
          </a>
        </div>
      </section>
    </>
  )
}

export default AboutUs
