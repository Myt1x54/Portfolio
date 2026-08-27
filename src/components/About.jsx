import { profile } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">01. about</span>
          <h2 className="section-title">Who I am</h2>
        </div>

        <div className="about__grid">
          <div className="about__text reveal">
            <p>{profile.summary}</p>
            <p>
              I'm currently a Computer Science student at{" "}
              <span className="neon">FAST NUCES, Islamabad</span>, with a
              particular love for turning tricky problems into clean, working
              software — from multithreaded simulations to full-stack mobile
              apps.
            </p>
            <p className="about__whoami">
              <span className="term__prompt">$</span> focus --areas
            </p>
            <ul className="about__list">
              <li>Mobile development (Android / Kotlin)</li>
              <li>Backend & REST APIs (Node.js, PHP)</li>
              <li>Databases (MySQL, SQL Server)</li>
              <li>Data structures, algorithms & systems programming</li>
            </ul>
          </div>

          <aside className="about__card reveal">
            <div className="about__cardline">
              <span className="term__prompt">const</span> dev = {"{"}
            </div>
            <div className="about__field">
              <span className="cyan">name</span>: "{profile.name}",
            </div>
            <div className="about__field">
              <span className="cyan">location</span>: "{profile.location}",
            </div>
            <div className="about__field">
              <span className="cyan">education</span>: "FAST NUCES",
            </div>
            <div className="about__field">
              <span className="cyan">status</span>:{" "}
              <span className="neon">"open to opportunities"</span>,
            </div>
            <div className="about__cardline">{"}"};</div>
          </aside>
        </div>
      </div>
    </section>
  );
}
