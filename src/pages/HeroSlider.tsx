import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import "./pages.css";

type Slide = {
  img: string;
  eyebrow: string;
  title: string;
  accent: string;
  text: string;
};

const slides: Slide[] = [
  {
    img: "/hero/balcony_view.jpg",
    eyebrow: "Residential Living",
    title: "Premium homes in",
    accent: "Noida's prime sectors",
    text: "Discover handpicked residential properties across Noida — from luxury high-rises to gated township villas in the city's most sought-after sectors.",
  },
  {
    img: "/hero/yamuna_expressway.png",
    eyebrow: "Yamuna Expressway",
    title: "Invest along the",
    accent: "Yamuna Expressway",
    text: "Fast-appreciating corridor connecting Noida to Agra. Invest in residential and commercial projects along one of North India's most strategic growth belts.",
  },
  {
    img: "/hero/top_building.jpg",
    eyebrow: "Commercial Spaces",
    title: "Commercial real estate",
    accent: "that drives returns",
    text: "Grade-A office spaces, retail shops, and business parks across Noida and Greater Noida — built for rental yield and long-term capital appreciation.",
  },
  {
    img: "/hero/pool_view.jpg",
    eyebrow: "Township Living",
    title: "Residential plots &",
    accent: "ready-to-move homes",
    text: "Build your dream home or invest in plotted developments across YEIDA and Noida Extension — with clear titles and approved layouts from leading developers.",
  },
  {
    img: "/hero/yeida_plots.png",
    eyebrow: "YEIDA Authority Plots",
    title: "YEIDA authority plots —",
    accent: "secure & high-growth",
    text: "Direct allotment and resale YEIDA plots in sectors along the Yamuna Expressway. Strategically positioned near the upcoming Jewar International Airport.",
  },
];

const SLIDE_DURATION = 6000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  const goTo = (index: number) => setCurrent(index);

  useEffect(() => {
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [next, current]);

  const slide = slides[current];

  return (
    <section className="home-hero">
      <div className="home-hero-slides">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`home-hero-slide ${i === current ? "active" : ""}`}
            aria-hidden={i !== current}
          >
            <img src={s.img} alt="" />
          </div>
        ))}
      </div>

      <button
        className="hero-slider-arrow prev"
        onClick={prev}
        aria-label="Previous slide"
      >
        <ChevronLeft />
      </button>
      <button
        className="hero-slider-arrow next"
        onClick={next}
        aria-label="Next slide"
      >
        <ChevronRight />
      </button>

      <div className="container home-hero-content">
        <div className="slide-content" key={current}>
          <span className="page-hero-eyebrow fade-up">
            <span className="dot" />
            {slide.eyebrow}
          </span>
          <h1 className="fade-up fade-up-delay-1">
            {slide.title} <span className="accent">{slide.accent}</span>
          </h1>
          <p className="fade-up fade-up-delay-2">{slide.text}</p>
          <div className="home-hero-actions fade-up fade-up-delay-3">
            <Link to="/properties" className="btn btn-gold btn-lg">
              Explore Properties
              <ArrowRight />
            </Link>
            <Link
              to="/advisory"
              className="btn btn-outline btn-lg"
              style={{
                color: "var(--surface)",
                borderColor: "rgba(255,255,255,0.3)",
              }}
            >
              Advisory Services
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-slider-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-slider-dot ${i === current ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
