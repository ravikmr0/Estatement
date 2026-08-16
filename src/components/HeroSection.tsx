import { useState, useEffect } from 'react'

interface HeroSlide {
  image: string
  eyebrow: string
  title: string
  supportingText: string
  description: string
  location: string
}

interface HeroSectionProps {
  slides?: HeroSlide[]
  eyebrow: string
  title: string
  description: string
  image: string
  showSlider?: boolean
}

export const HeroSection = ({ slides, eyebrow, title, description, image, showSlider = false }: HeroSectionProps) => {
  const [heroSlideIndex, setHeroSlideIndex] = useState(0)

  useEffect(() => {
    if (!showSlider || !slides || slides.length <= 1) return

    const slideTimer = window.setInterval(() => {
      setHeroSlideIndex((index) => (index + 1) % slides.length)
    }, 6000)

    return () => window.clearInterval(slideTimer)
  }, [showSlider, slides])

  const showPreviousSlide = () => {
    if (!slides) return
    setHeroSlideIndex((index) => (index - 1 + slides.length) % slides.length)
  }

  const showNextSlide = () => {
    if (!slides) return
    setHeroSlideIndex((index) => (index + 1) % slides.length)
  }

  const currentSlide = showSlider && slides ? slides[heroSlideIndex] : null
  const displayEyebrow = currentSlide?.eyebrow || eyebrow
  const displayTitle = currentSlide?.title || title
  const displayText = currentSlide?.supportingText || ''
  const displayDescription = currentSlide?.description || description
  const displayImage = currentSlide?.image || image

  return (
    <section
      className="hero-section reveal"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(3, 75, 64, 0.34), rgba(3, 75, 64, 0.82)), url('${displayImage}')`,
      }}
    >
      {showSlider && slides && slides.length > 1 && (
        <div className="hero-slide-controls">
          <button type="button" className="hero-slide-button prev" onClick={showPreviousSlide} aria-label="Previous slide">
            ‹
          </button>
          <button type="button" className="hero-slide-button next" onClick={showNextSlide} aria-label="Next slide">
            ›
          </button>
        </div>
      )}
      <div className="hero-panel">
        <div className="hero-panel-inner">
          <span className="hero-eyebrow">{displayEyebrow}</span>
          <div className="hero-accent-line" />
          <h1 className="hero-title">{displayTitle}</h1>
          <p className="hero-copy">
            {displayText && (
              <>
                {displayText}
                <br />
                <br />
              </>
            )}
            {displayDescription}
          </p>
        </div>
      </div>
      {!showSlider && (
        <div className="scroll-indicator" aria-hidden="true">
          <span className="dot" />
          <span>Scroll</span>
        </div>
      )}
    </section>
  )
}
