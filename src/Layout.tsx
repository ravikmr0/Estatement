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
      <Seo />
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-inner">
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
