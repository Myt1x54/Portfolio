import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <div className="section-head reveal" style={{ textAlign: "center" }}>
          <span className="section-tag" style={{ justifyContent: "center" }}>
            05. contact
          </span>
          <h2 className="section-title">Let's build something</h2>
          <p className="section-subtitle" style={{ margin: "12px auto 0" }}>
            I'm always open to internships, collaborations, or a good
            conversation about code. My inbox is open.
          </p>
        </div>

        <div className="contact__actions reveal">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            ✉ {profile.email}
          </a>
        </div>

        <div className="contact__links reveal">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span className="contact__sep">/</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span className="contact__sep">/</span>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>

      <footer className="footer">
        <p>
          <span className="term__prompt">$</span> built with React + Vite by{" "}
          {profile.name} · {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
}
