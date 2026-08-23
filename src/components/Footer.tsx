interface FooterProps {
  onNavigate: (href: string) => void
}

export const Footer = ({ onNavigate }: FooterProps) => {
  const handleLinkClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    onNavigate(href)
  }

  return (
    <footer className="site-footer">
      <div className="footer-wrapper">
        <div className="footer-inner">
          {/* Column 1: Brand */}
          <div className="footer-column footer-brand-column">
            <p className="footer-copy">
              We help investors and homeowners make confident, informed property decisions through data-driven advisory and curated real estate opportunities.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 448 512" aria-hidden="true" fill="currentColor">
                  <path d="M100.28 447.74h-92.18V148.2h92.18zm-46.09-341.3c-29.56 0-53.47-23.91-53.47-53.47s23.91-53.47 53.47-53.47 53.47 23.91 53.47 53.47-23.91 53.47-53.47 53.47zm344.85 341.3h-92.17V299.2c0-34.48-12.35-58.08-43.21-58.08-23.56 0-37.6 15.89-43.78 31.2-.2.49-.25 1.17-.25 1.86v167.55H131.7s1.22-271.75 0-299.77h92.18v42.48c12.2-18.8 33.99-45.7 82.93-45.7 60.54 0 105.82 39.6 105.82 124.78v178.21z" />
                </svg>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 448 512" aria-hidden="true" fill="currentColor">
                  <path d="M224.1 141.75c-70.61 0-127.9 57.29-127.9 127.9s57.29 127.9 127.9 127.9 127.9-57.29 127.9-127.9-57.29-127.9-127.9-127.9zm0 210.6c-45.86 0-83.1-37.24-83.1-83.1s37.24-83.1 83.1-83.1 83.1 37.24 83.1 83.1-37.24 83.1-83.1 83.1zm145.36-247.34c0 16.52-13.4 29.92-29.92 29.92s-29.92-13.4-29.92-29.92 13.4-29.92 29.92-29.92 29.92 13.4 29.92 29.92zm82.5 30.49c-1.86-39.33-10.88-74.13-39.68-102.93C382.76 19.76 348.03 10.72 308.7 8.86c-40.6-2.31-162.25-2.31-202.85 0-39.33 1.86-74.13 10.88-102.93 39.68C-9.58 77.36-18.62 112.09-20.48 151.42c-2.31 40.6-2.31 162.25 0 202.85 1.86 39.33 10.88 74.13 39.68 102.93 28.8 28.8 63.53 37.84 102.86 39.68 40.6 2.31 162.25 2.31 202.85 0 39.33-1.86 74.13-10.88 102.93-39.68 28.8-28.8 37.84-63.53 39.68-102.86 2.31-40.6 2.31-162.25 0-202.85zm-52.7 249.94c-8.6 21.61-25.18 38.19-46.79 46.79-32.42 12.9-109.48 9.94-145.43 9.94s-112.99 2.96-145.43-9.94c-21.61-8.6-38.19-25.18-46.79-46.79C52.7 355.74 55.66 278.68 55.66 224.73s-2.96-112.99 9.94-145.43c8.6-21.61 25.18-38.19 46.79-46.79C111.81 19.61 188.87 22.57 224.82 22.57s112.99-2.96 145.43 9.94c21.61 8.6 38.19 25.18 46.79 46.79 12.9 32.42 9.94 109.48 9.94 145.43s2.96 112.99-9.94 145.43z" />
                </svg>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 320 512" aria-hidden="true" fill="currentColor">
                  <path d="M279.14 288l14.22-92.66h-88.91V127.5c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.07 44.3-121.07 124.6V195.3H22.12V288h82.17v224h100.77V288z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@Estatement_Group" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 512 512" aria-hidden="true" fill="currentColor">
                  <path d="M500.9 113.7c-5.9-22.1-23.3-39.5-45.4-45.4C415.4 56.5 256 56.5 256 56.5S96.6 56.5 56.5 68.3c-22.1 5.9-39.5 23.3-45.4 45.4C0 153.8 0 256 0 256s0 102.2 11.1 142.3c5.9 22.1 23.3 38.7 45.4 44.6C96.6 454.7 256 454.7 256 454.7s159.4 0 199.5-11.8c22.1-5.9 39.5-22.5 45.4-44.6C512 358.2 512 256 512 256s0-102.2-11.1-142.3zM204.8 356.6V155.4L337.1 256l-132.3 100.6z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="footer-column">
            <h3 className="footer-column-title">COMPANY</h3>
            <nav className="footer-nav">
              <a href="/about" onClick={handleLinkClick('/about')} className="footer-link">About Us</a>
              <a href="/mission-vision" onClick={handleLinkClick('/mission-vision')} className="footer-link">Mission & Vision</a>
              <a href="/properties" onClick={handleLinkClick('/properties')} className="footer-link">Properties</a>
              <a href="/investment-advisory" onClick={handleLinkClick('/investment-advisory')} className="footer-link">Investment Advisory</a>
            </nav>
          </div>

          {/* Column 3: Resources */}
          <div className="footer-column">
            <h3 className="footer-column-title">RESOURCES</h3>
            <nav className="footer-nav">
              <a href="/properties" onClick={handleLinkClick('/properties')} className="footer-link">Property Listings</a>
              <a href="/advisory" onClick={handleLinkClick('/advisory')} className="footer-link">Advisory Services</a>
              <a href="/contact" onClick={handleLinkClick('/contact')} className="footer-link">Book Consultation</a>
              <a href="/contact" onClick={handleLinkClick('/contact')} className="footer-link">Get in Touch</a>
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copyright">© 2026 Estatement Realty Pvt Ltd. All rights reserved.</p>
          <p className="footer-tagline-bottom">Invest Right. Live Better. Earn Smarter.</p>
        </div>
      </div>
    </footer>
  )
}
