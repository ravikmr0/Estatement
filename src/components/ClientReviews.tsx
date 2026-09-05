import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import "./ClientReviews.css";

type ClientReview = {
  name: string;
  role: string;
  rating: number;
  review: string;
  image: string;
};

const reviews: ClientReview[] = [
  {
    name: "Rohan Mehta",
    role: "Home buyer, Noida",
    rating: 5,
    review: "The team understood what we needed and helped us compare options without any pressure. The entire process felt clear and well managed.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=85",
  },
  {
    name: "Ananya Kapoor",
    role: "Investor, Greater Noida",
    rating: 4.5,
    review: "Their market insights gave me the confidence to invest in the right corridor. Practical advice, quick responses, and no unnecessary noise.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=85",
  },
  {
    name: "Vikram Sethi",
    role: "Business owner, Noida Expressway",
    rating: 5,
    review: "Estatement helped us find a commercial space that matched our budget and growth plans. The shortlist was thoughtful and relevant.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=85",
  },
  {
    name: "Priya Sharma",
    role: "Property buyer, YEIDA",
    rating: 5,
    review: "We appreciated the honest guidance throughout our plot search. Every question was answered patiently, and the next step was always clear.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=85",
  },
  {
    name: "Arjun Malhotra",
    role: "Investor, Noida",
    rating: 4.5,
    review: "A very professional experience from the first call. They brought useful local context that made the decision much easier.",
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=240&q=85",
  },
  {
    name: "Neha Bansal",
    role: "Home buyer, Sector 150",
    rating: 5,
    review: "The property options were well curated and matched our lifestyle. We never felt rushed, which made the whole experience comfortable.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=85",
  },
  {
    name: "Siddharth Rao",
    role: "Entrepreneur, Noida",
    rating: 5,
    review: "Their due diligence mindset really stood out. They looked beyond the brochure and helped us make a more informed investment.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&q=85",
  },
  {
    name: "Kavita Arora",
    role: "Home buyer, Greater Noida",
    rating: 4.5,
    review: "From site visits to final conversations, everything was coordinated smoothly. The advice felt personal rather than generic.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=240&q=85",
  },
  {
    name: "Manish Khanna",
    role: "Investor, YEIDA corridor",
    rating: 5,
    review: "A dependable advisory team with a strong understanding of the region. They helped me see both the opportunity and the risks clearly.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=240&q=85",
  },
  {
    name: "Ishita Verma",
    role: "Home buyer, Noida Expressway",
    rating: 5,
    review: "The process was transparent from start to finish. I would happily recommend Estatement to anyone looking for a more considered property search.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&q=85",
  },
];

const renderStars = (rating: number) => (
  <span className="client-review-stars" aria-label={`${rating} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((star) => (
      <Star key={star} size={15} fill={star <= rating ? "currentColor" : "none"} />
    ))}
  </span>
);

export default function ClientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [sliderWidth, setSliderWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const maxIndex = reviews.length - cardsPerView;
  const reviewGap = cardsPerView === 1 ? 14 : cardsPerView === 2 ? 18 : 22;
  const cardWidth = sliderWidth > 0
    ? (sliderWidth - reviewGap * (cardsPerView - 1)) / cardsPerView
    : 0;
  const slideOffset = currentIndex * (cardWidth + reviewGap);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return undefined;

    const updateSliderWidth = () => setSliderWidth(slider.clientWidth);
    const observer = new ResizeObserver(updateSliderWidth);
    observer.observe(slider);
    updateSliderWidth();

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth <= 640 ? 1 : window.innerWidth <= 1100 ? 2 : 3);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    setCurrentIndex((index) => Math.min(index, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused) return undefined;

    const interval = window.setInterval(() => {
      setCurrentIndex((index) => (index >= maxIndex ? 0 : index + 1));
    }, 4500);

    return () => window.clearInterval(interval);
  }, [isPaused, maxIndex]);

  const showPrevious = () => {
    setCurrentIndex((index) => (index <= 0 ? maxIndex : index - 1));
  };

  const showNext = () => {
    setCurrentIndex((index) => (index >= maxIndex ? 0 : index + 1));
  };

  return (
    <section className="client-reviews-section" aria-labelledby="client-reviews-title">
      <div className="container">
        <div className="client-reviews-heading">
          <div>
            <span className="section-eyebrow">Client Stories</span>
            <h2 className="section-title" id="client-reviews-title">Trusted by people making their next move</h2>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="client-reviews-slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div className="client-reviews-track" style={{ transform: `translate3d(-${slideOffset}px, 0, 0)` }}>
            {reviews.map((review) => (
              <article className="client-review-card" key={review.name}>
                <div className="client-review-card-top">
                  <Quote className="client-review-quote" size={28} aria-hidden="true" />
                  {renderStars(review.rating)}
                </div>
                <blockquote>{review.review}</blockquote>
                <footer className="client-review-author">
                  <img src={review.image} alt={review.name} />
                  <span>
                    <strong>{review.name}</strong>
                    <small>{review.role}</small>
                  </span>
                </footer>
              </article>
            ))}
          </div>

          <button type="button" className="client-reviews-arrow prev" onClick={showPrevious} aria-label="Previous client review">
            <ChevronLeft size={20} />
          </button>
          <button type="button" className="client-reviews-arrow next" onClick={showNext} aria-label="Next client review">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="client-reviews-dots" aria-label="Client review slides">
          {reviews.slice(0, maxIndex + 1).map((review, index) => (
            <button
              type="button"
              key={review.name}
              className={index === currentIndex ? "active" : ""}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show review from ${review.name}`}
              aria-current={index === currentIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}