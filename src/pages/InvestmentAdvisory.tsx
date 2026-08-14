import { HeroSection } from '../components/HeroSection'
import { advisoryPoints } from '../data/constants'

interface InvestmentAdvisoryProps {
  onNavigate: (href: string) => void
}

const InvestmentAdvisory = ({ onNavigate }: InvestmentAdvisoryProps) => {
  const getAdvisoryDescription = (point: string): string => {
    const descriptions: Record<string, string> = {
      'Market Understanding':
        'Evaluate the broader location and development environment before recommending opportunities.',
      'Opportunity Screening': 'Focus on carefully selected opportunities with value and clear positioning.',
      'Property Evaluation':
        'Review property fundamentals, pricing and market positioning with professional context.',
      'Personalized Strategy': 'Align opportunities with your objectives, risk appetite and investment horizon.',
      'Transaction Support': 'Provide assistance through due diligence, negotiation and closing.',
    }
    return descriptions[point] || ''
  }

  const handleLinkClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    onNavigate(href)
  }

  return (
    <>
      <HeroSection
        eyebrow="Invest With Perspective"
        title="Real Estate Opportunities Evaluated Beyond the Brochure."
        description="Estatement takes a careful advisory approach to help you understand property opportunities without promises of guaranteed returns."
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
        showSlider={false}
      />

      <section className="section approach-grid reveal">
        <div className="advisory-grid">
          {advisoryPoints.map((point) => (
            <article key={point} className="advisory-card">
              <h3>{point}</h3>
              <p>{getAdvisoryDescription(point)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section centered-cta reveal">
        <div className="cta-panel-inner">
          <h2>Discuss Your Investment Objective</h2>
          <a href="/contact-us" onClick={handleLinkClick('/contact-us')} className="button button-primary">
            Discuss Your Investment Objective
          </a>
        </div>
      </section>
    </>
  )
}

export default InvestmentAdvisory
