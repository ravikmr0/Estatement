import "./HomeStats.css";

const stats = [
  { number: "1500+", label: "Properties Sold" },
  { number: "500+", label: "Happy Clients" },
  { number: "100%", label: "Successful Projects" },
];

export default function HomeStats() {
  return (
    <section className="home-stats-section" aria-label="Estatement Realty achievements">
      <div className="container">
        <div className="home-stats-grid">
          {stats.map((stat) => (
            <article className="home-stat-card" key={stat.label}>
              <strong className="home-stat-number">{stat.number}</strong>
              <span className="home-stat-label">{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
