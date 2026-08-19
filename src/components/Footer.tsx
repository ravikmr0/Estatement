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
            <div className="footer-logo-mark">
              <p className="footer-logo">ESTATEMENT</p>
              <p className="footer-company-name">Realty</p>
            </div>
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
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg viewBox="0 0 512 512" aria-hidden="true" fill="currentColor">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
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
