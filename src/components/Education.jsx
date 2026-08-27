import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">04. education</span>
          <h2 className="section-title">Where I've studied</h2>
        </div>

        <div className="timeline">
          {education.map((e) => (
            <div key={e.degree} className="timeline__item reveal">
              <span className="timeline__dot" />
              <div className="timeline__content">
                <span className="timeline__period">{e.period}</span>
                <h3 className="timeline__degree">{e.degree}</h3>
                <p className="timeline__school">{e.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
