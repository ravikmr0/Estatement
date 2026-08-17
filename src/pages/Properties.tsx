import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, BedDouble, Maximize, Bath } from "lucide-react";
import "./pages.css";

const heroImg =
  "https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600";

type Property = {
  img: string;
  tag: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  area: string;
  price: string;
  category: "Residential" | "Investment" | "Commercial";
};

const allProperties: Property[] = [
  {
    img: "https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tag: "For Sale",
    title: "The Hillcrest Residence",
    location: "Palo Alto, CA",
    beds: 4,
    baths: 3,
    area: "3,200 sqft",
    price: "$2.85M",
    category: "Residential",
  },
  {
    img: "https://images.pexels.com/photos/16110999/pexels-photo-16110999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tag: "Investment",
    title: "Marina Bay Lofts",
    location: "San Francisco, CA",
    beds: 2,
    baths: 2,
    area: "1,480 sqft",
    price: "$1.42M",
    category: "Investment",
  },
  {
    img: "https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tag: "New Listing",
    title: "Oakwood Modern Villa",
    location: "Menlo Park, CA",
    beds: 5,
    baths: 4,
    area: "4,100 sqft",
    price: "$3.95M",
    category: "Residential",
  },
  {
    img: "https://images.pexels.com/photos/31737859/pexels-photo-31737859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tag: "Premium",
    title: "Lumière Estate",
    location: "Atherton, CA",
    beds: 6,
    baths: 5,
    area: "5,800 sqft",
    price: "$6.20M",
    category: "Residential",
  },
  {
    img: "https://images.pexels.com/photos/4424414/pexels-photo-4424414.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tag: "Investment",
    title: "Harbour View Towers",
    location: "Oakland, CA",
    beds: 0,
    baths: 0,
    area: "12 units",
    price: "$8.50M",
    category: "Commercial",
  },
  {
    img: "https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tag: "For Sale",
    title: "Cedar Brook Cottage",
    location: "Los Altos, CA",
    beds: 3,
    baths: 2,
    area: "2,100 sqft",
    price: "$1.95M",
    category: "Residential",
  },
  {
    img: "https://images.pexels.com/photos/27451770/pexels-photo-27451770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tag: "Investment",
    title: "The Greenwich Apartments",
    location: "San Jose, CA",
    beds: 1,
    baths: 1,
    area: "8 units",
    price: "$3.75M",
    category: "Investment",
  },
  {
    img: "https://images.pexels.com/photos/19263207/pexels-photo-19263207.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tag: "Commercial",
    title: "Atrium Office Plaza",
    location: "Fremont, CA",
    beds: 0,
    baths: 0,
    area: "18,000 sqft",
    price: "$5.40M",
    category: "Commercial",
  },
  {
    img: "https://images.pexels.com/photos/37692742/pexels-photo-37692742.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tag: "Premium",
    title: "Villa Toscana",
    location: "Hillsborough, CA",
    beds: 5,
    baths: 4,
    area: "4,600 sqft",
    price: "$4.85M",
    category: "Residential",
  },
];

const filters = ["All", "Residential", "Investment", "Commercial"] as const;

export default function Properties() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const shown =
    active === "All"
      ? allProperties
      : allProperties.filter((p) => p.category === active);

  return (
    <>
      <section className="page-hero">
        <img className="page-hero-image" src={heroImg} alt="" />
        <div className="container page-hero-content">
          <span className="page-hero-eyebrow fade-up">
            <span className="dot" />
            Property Portfolio
          </span>
          <h1 className="page-hero-title fade-up fade-up-delay-1">
            Curated properties, vetted for value
          </h1>
          <p className="page-hero-subtitle fade-up fade-up-delay-2">
            Every listing in our portfolio has been analysed by our advisory
            team for location quality, growth potential, and investment merit.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-bar">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-chip ${active === f ? "active" : ""}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="property-grid">
            {shown.map((p) => (
              <div key={p.title} className="property-card">
                <div className="property-card-img">
                  <img src={p.img} alt={p.title} />
                  <span className="property-tag">{p.tag}</span>
                </div>
                <div className="property-card-body">
                  <h3>{p.title}</h3>
                  <div className="property-location">
                    <MapPin />
                    {p.location}
                  </div>
                  <div className="property-specs">
                    {p.beds > 0 && (
                      <span className="property-spec"><BedDouble /> {p.beds} Beds</span>
                    )}
                    {p.baths > 0 && (
                      <span className="property-spec"><Bath /> {p.baths} Baths</span>
                    )}
                    <span className="property-spec"><Maximize /> {p.area}</span>
                  </div>
                  <div className="property-price">{p.price}</div>
                </div>
              </div>
            ))}
          </div>

          {shown.length === 0 && (
            <p style={{ textAlign: "center", color: "var(--text-muted)", marginTop: 40 }}>
              No properties in this category right now. Check back soon.
            </p>
          )}
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-band-inner">
            <div className="cta-band-text">
              <h2>Don't see the right fit?</h2>
              <p>Our advisory team sources off-market opportunities tailored to your criteria.</p>
            </div>
            <div className="cta-band-actions">
              <Link to="/contact" className="btn btn-gold btn-lg">
                Request a Property
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
