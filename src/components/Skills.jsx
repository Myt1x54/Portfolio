import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">03. skills</span>
          <h2 className="section-title">My toolbox</h2>
        </div>

        <div className="skills__grid">
          {skills.map((s) => (
            <div key={s.group} className="skills__card reveal">
              <h3 className="skills__group">
                <span className="term__prompt">›</span> {s.group}
              </h3>
              <div className="skills__tags">
                {s.items.map((item) => (
                  <span key={item} className="tag tag--skill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
