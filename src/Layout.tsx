import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  Home,
  Building2,
  Compass,
  Phone,
  Users,
  Menu,
  X,
  Search,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import "./styles.css";
import Seo from "./components/Seo";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About Us", icon: Users },
  { to: "/mission", label: "Mission & Vision", icon: Compass },
  { to: "/properties", label: "Properties", icon: Building2 },
  { to: "/advisory", label: "Investment Advisory", icon: Compass },
  { to: "/contact", label: "Contact Us", icon: Phone },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      <Seo />
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-inner">
          <div className="brand-logo-section">
            <Link to="/" className="brand-wordmark-link" aria-label="Estatement home">
              <img className="brand-image" src="/estatement_logo.png" alt="Estatement" />
            </Link>
            <span className="brand-tagline">WHERE PROPERTY BECOMES A STATEMENT.</span>
          </div>

          <form className="header-search" action="/properties" method="get" role="search">
            <Search aria-hidden="true" />
            <input name="q" type="search" placeholder="Search" aria-label="Search properties" />
          </form>

          <nav className="main-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Menu />
          </button>
        </div>
      </header>

      {menuOpen && (
        <>
          <div
            className="mobile-menu-overlay"
            style={{ display: "block" }}
            onClick={() => setMenuOpen(false)}
          />
          <div id="mobile-menu" className="mobile-menu-panel open" role="dialog" aria-modal="true" aria-label="Main navigation">
            <button
              ref={closeButtonRef}
              className="mobile-menu-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X />
            </button>
            <div className="editorial-menu-content">
              <Link to="/" className="editorial-menu-brand" onClick={() => setMenuOpen(false)} aria-label="Estatement home">
                <img src={`${import.meta.env.BASE_URL}estatement_logo.png`} alt="Estatement" />
              </Link>
              <nav className="editorial-menu-nav" aria-label="Primary navigation">
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `editorial-menu-link ${isActive ? "active" : ""}`
                    }
                  >
                    <span className="editorial-menu-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="editorial-menu-divider" aria-hidden="true" />
                    <span className="editorial-menu-label">{item.label}</span>
                  </NavLink>
                ))}
              </nav>

              <div className="editorial-menu-lower">
                <p className="editorial-menu-intro">
                  CURATED REAL ESTATE.<br />
                  CONSIDERED INVESTMENTS.
                </p>
                <Link className="editorial-menu-cta" to="/contact" onClick={() => setMenuOpen(false)}>
                  PRIVATE CONSULTATION <span aria-hidden="true">→</span>
                </Link>
                <p className="editorial-menu-locations">NOIDA <span aria-hidden="true">·</span> DELHI NCR <span aria-hidden="true">·</span> YEIDA</p>
              </div>

              <div className="editorial-menu-footer">
                <div className="editorial-menu-socials" aria-label="Social media links">
                  <a href="https://www.linkedin.com/company/estatement-realty/" aria-label="LinkedIn"><Linkedin /></a>
                  <a href="https://www.instagram.com/estatementofficial/" aria-label="Instagram"><Instagram /></a>
                  <a href="https://www.youtube.com/@Estatement_Group" aria-label="YouTube"><Youtube /></a>
                  <a href="https://x.com/Estatementgrp" target="_blank" rel="noopener noreferrer" aria-label="X">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.976 6.817H1.67l7.73-8.835L1.244 2.25h6.826l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
                <div className="editorial-menu-signature" aria-label="More Than Property">
                  <span>More</span>
                  <span>Than</span>
                  <span>Property</span>
                  <i aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <main className={location.pathname === "/about" ? "about-page" : ""}>{children}</main>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-wordmark-block">
              <div className="footer-wordmark-shell">
                <img className="brand-image" src="/estatement_logo.png" alt="Estatement" />
              </div>
              <p className="footer-company-name">Estatement Realty Private Limited</p>
              <p className="footer-wordmark-tagline">WHERE PROPERTY BECOMES A STATEMENT.</p>
              <div className="footer-brand">
                <p className="footer-about">
                  We help investors and homeowners make confident, informed
                  property decisions through data-driven advisory and curated
                  real estate opportunities.
                </p>
                <div className="footer-social">
                  <a href="https://www.linkedin.com/company/estatement-realty/" aria-label="LinkedIn"><Linkedin /></a>
                  <a href="https://www.instagram.com/estatementofficial/" aria-label="Instagram"><Instagram /></a>
                  <a href="https://www.facebook.com/estatementgroup" aria-label="Facebook"><Facebook /></a>
                  <a href="https://www.youtube.com/@Estatement_Group" aria-label="YouTube"><Youtube /></a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="footer-col-title">Company</h4>
              <div className="footer-nav">
                <Link to="/about">About Us</Link>
                <Link to="/mission">Mission & Vision</Link>
                <Link to="/properties">Properties</Link>
                <Link to="/advisory">Investment Advisory</Link>
              </div>
            </div>

            <div>
              <h4 className="footer-col-title">Resources</h4>
              <div className="footer-nav">
                <Link to="/properties">Property Listings</Link>
                <Link to="/advisory">Advisory Services</Link>
                <Link to="/contact">Book Consultation</Link>
                <Link to="/contact">Get in Touch</Link>
              </div>
            </div>

            <div>
              <h4 className="footer-col-title">Contact</h4>
              <div className="footer-nav">
                <div>
                  <strong>Phone</strong>
                  <p>+91-8750080023</p>
                </div>
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:info@estatement.in">info@estatement.in</a> | <a href="mailto:ajay@estatement.in">ajay@estatement.in</a></p>
                </div>
                <div>
                  <strong>Office</strong>
                  <p>A-74A, Sector 136, Noida, Gautam Buddha Nagar, Uttar Pradesh 201305, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>&copy; {new Date().getFullYear()} ESTATEMENT. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
