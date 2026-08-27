import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";

// Typewriter effect that cycles through a list of phrases.
function useTypewriter(words, speed = 90, pause = 1600) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    let t;
    if (!del && text === current) {
      t = setTimeout(() => setDel(true), pause);
    } else if (del && text === "") {
      setDel(false);
      setI((v) => v + 1);
    } else {
      t = setTimeout(() => {
        setText(
          del
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1)
        );
      }, del ? speed / 2 : speed);
    }
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter([
    "Android apps with Kotlin.",
    "REST APIs with Node.js & PHP.",
    "systems in C++ & Assembly.",
    "data-structure-driven software.",
  ]);

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__terminal reveal">
          <div className="term__bar">
            <span className="term__dot term__dot--red" />
            <span className="term__dot term__dot--yellow" />
            <span className="term__dot term__dot--green" />
            <span className="term__title">bash — abdul@portfolio</span>
          </div>
          <div className="term__body">
            <p>
              <span className="term__prompt">$</span> whoami
            </p>
            <p className="term__out">{profile.name}</p>
            <p>
              <span className="term__prompt">$</span> cat role.txt
            </p>
            <p className="term__out">{profile.role}</p>
            <p>
              <span className="term__prompt">$</span> location --now
            </p>
            <p className="term__out">📍 {profile.location}</p>
          </div>
        </div>

        <div className="hero__content reveal">
          <p className="hero__hi">
            <span className="neon">$</span> Hi, my name is
          </p>
          <h1 className="hero__name">{profile.name}.</h1>
          <h2 className="hero__build">
            I build <span className="neon">{typed}</span>
            <span className="hero__caret">▋</span>
          </h2>
          <p className="hero__summary">{profile.tagline}</p>

          <div className="hero__stats">
            {profile.stats.map((s) => (
              <div key={s.label} className="stat">
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="hero__cta">
            <a href="#projects" className="btn btn-primary">
              ./view_projects
            </a>
            <a href="#contact" className="btn">
              get in touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
