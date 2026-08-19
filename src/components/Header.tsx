import { useState, useEffect } from 'react'
import { navLinks } from '../data/constants'

interface HeaderProps {
  scrolled: boolean
  activePath: string
  onNavigate: (href: string) => void
}

export const Header = ({ scrolled, activePath, onNavigate }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLinkClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    onNavigate(href)
    setMobileMenuOpen(false)
  }

  const closeMobileMenu = () => setMobileMenuOpen(false)

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false)
    }
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleEscape)
      return () => window.removeEventListener('keydown', handleEscape)
    }
  }, [mobileMenuOpen])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <a href="/" onClick={handleLinkClick('/')} className="brand-mark" aria-label="ESTATEMENT Realty home">
          <span className="brand-name">ESTATEMENT</span>
          <span className="brand-tag">Realty</span>
        </a>

        <nav className="main-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick(link.href)}
              className={`nav-link ${activePath === link.href ? 'active' : ''}`}
              aria-current={activePath === link.href ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="/contact-us" onClick={handleLinkClick('/contact-us')} className="nav-cta">
            Talk to an Advisor
          </a>
          <button
            type="button"
            className={`mobile-toggle ${mobileMenuOpen ? 'is-open' : ''}`}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'visible' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      <nav
        id="mobile-menu"
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
        aria-label="Mobile navigation"
      >
        <button
          type="button"
          className="mobile-menu-close"
          aria-label="Close navigation menu"
          onClick={closeMobileMenu}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
        <div className="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick(link.href)}
              className={`mobile-link ${activePath === link.href ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a href="/contact-us" onClick={handleLinkClick('/contact-us')} className="mobile-cta">
          Talk to an Advisor
        </a>
      </nav>
    </header>
  )
}
