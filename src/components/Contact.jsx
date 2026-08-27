import { useState } from "react";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  // Gmail compose in a new tab — works with a single click even when the
  // visitor has no desktop mail app configured (mailto: would silently fail).
  const gmailCompose =
    "https://mail.google.com/mail/?view=cm&fs=1&to=" +
    encodeURIComponent(profile.email) +
    "&su=" +
    encodeURIComponent("Hello Abdul — from your portfolio");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked (e.g. insecure context) — fall back to mailto.
      window.location.href = `mailto:${profile.email}`;
    }
  };

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
          <a
            href={gmailCompose}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            ✉ Email me
          </a>
          <button type="button" className="btn" onClick={copyEmail}>
            {copied ? "✓ copied!" : `⧉ ${profile.email}`}
          </button>
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
          <a href={gmailCompose} target="_blank" rel="noreferrer">
            Email
          </a>
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
