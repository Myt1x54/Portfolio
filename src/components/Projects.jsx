import { useMemo, useState } from "react";
import { projects, categories } from "../data/portfolio";

export default function Projects() {
  const [active, setActive] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category.includes(active));
  }, [active]);

  const countFor = (cat) =>
    cat === "All"
      ? projects.length
      : projects.filter((p) => p.category.includes(cat)).length;

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">02. projects</span>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-subtitle">
            {projects.length} projects across mobile, backend, systems and games.
            Filter by category to explore.
          </p>
        </div>

        {/* Filter bar */}
        <div className="filters reveal" role="tablist" aria-label="Project filters">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`chip ${active === cat ? "chip--active" : ""}`}
              onClick={() => {
                setActive(cat);
                setExpanded(null);
              }}
            >
              {cat}
              <span className="chip__count">{countFor(cat)}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {filtered.map((p) => {
            const isOpen = expanded === p.title;
            return (
              <article
                key={p.title}
                className={`card ${p.featured ? "card--featured" : ""} ${
                  isOpen ? "card--open" : ""
                }`}
              >
                {p.featured && <span className="card__badge">★ featured</span>}

                <header className="card__head">
                  <div>
                    <h3 className="card__title">{p.title}</h3>
                    <p className="card__subtitle">{p.subtitle}</p>
                  </div>
                  <span className="card__period">{p.period}</span>
                </header>

                <p className="card__desc">{p.description}</p>

                {isOpen && (
                  <ul className="card__highlights">
                    {p.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}

                <div className="card__tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  className="card__toggle"
                  onClick={() => setExpanded(isOpen ? null : p.title)}
                  aria-expanded={isOpen}
                >
                  {isOpen ? "− hide details" : "+ view details"}
                </button>
              </article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="projects__empty">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}
