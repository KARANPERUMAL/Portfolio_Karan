import React from "react";
import experiences from "../data/experiences.js";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-shell">
        <h2>
          My <strong>Experience</strong>
        </h2>

        <div className="experience-list">
          {experiences.map((item, index) => (
            <article
              className={
                index === 1 ? "experience-card muted" : "experience-card"
              }
              key={item.role}
            >
              <div className="experience-head">
                <span className="company-dot">{item.company.charAt(0)}</span>

                <h3>{item.role}</h3>

                <time>{item.date}</time>
              </div>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
