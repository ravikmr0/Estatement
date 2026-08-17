import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  Home,
  Building2,
  Compass,
  Phone,
  Users,
  Menu,
  X,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";
import "./styles.css";

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

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="Mira Estate Advisory home">
            <span className="brand-mark">
              <Building2 />
            </span>
            <span className="brand-text">
              <span className="brand-name">Mira Estate</span>
              <span className="brand-tag">Advisory</span>
            </span>
          </Link>

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
          <div className="mobile-menu-panel open">
            <button
              className="mobile-menu-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X />
            </button>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </>
      )}

      <main>{children}</main>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="brand">
                <span className="brand-mark">
                  <Building2 />
                </span>
                <span className="brand-text">
                  <span className="brand-name">Mira Estate</span>
                  <span className="brand-tag">Advisory</span>
                </span>
              </div>
              <p className="footer-about">
                We help investors and homeowners make confident, informed
                property decisions through data-driven advisory and curated
                real estate opportunities.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="LinkedIn"><Linkedin /></a>
                <a href="#" aria-label="Instagram"><Instagram /></a>
                <a href="#" aria-label="Facebook"><Facebook /></a>
                <a href="#" aria-label="Twitter"><Twitter /></a>
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
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
                <a href="mailto:hello@miraestate.co">hello@miraestate.co</a>
                <span>450 Market Street, Suite 1200</span>
                <span>San Francisco, CA 94105</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>&copy; {new Date().getFullYear()} Mira Estate Advisory. All rights reserved.</span>
            <span>Designed for confident property decisions.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
