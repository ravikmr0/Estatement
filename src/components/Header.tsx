import { useState } from 'react'
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

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <a href="/" onClick={handleLinkClick('/')} className="brand-mark">
          Estatement
        </a>
        <nav className="main-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick(link.href)}
              className={`nav-link ${activePath === link.href ? 'active' : ''}`}
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
              onClick={handleLinkClick(link.href)}
              className={`mobile-link ${activePath === link.href ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a href="/contact-us" onClick={handleLinkClick('/contact-us')} className="mobile-cta">
          Talk to an Advisor
        </a>
      </div>
    </header>
  )
}
