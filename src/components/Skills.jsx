import React from "react";
import { FaGithub } from "react-icons/fa6";
import {
  SiFigma,
  SiJavascript,
  SiMysql,
  SiOpenjdk,
  SiPostman,
  SiReact,
  SiSpringboot,
  SiSqlite,
} from "react-icons/si";
import { FiCode } from "react-icons/fi";
import skills from "../data/skills.js";

const skillIcons = {
  Java: SiOpenjdk,
  JavaScript: SiJavascript,
  React: SiReact,
  "Spring Boot": SiSpringboot,
  "REST APIs": FiCode,
  MySQL: SiMysql,
  SQLite: SiSqlite,
  Postman: SiPostman,
  GitHub: FaGithub,
  Figma: SiFigma,
};

function Skills() {
  return (
    <section className="skills section-shell" id="skills">
      <h2>
        My <strong>Skills</strong>
      </h2>

      <div className="skill-grid">
        {skills.map((skill) => {
          const Icon = skillIcons[skill];

          return (
            <article className="skill-card" key={skill}>
              <span className="skill-icon">
                <Icon aria-hidden="true" />
              </span>
              <strong>{skill}</strong>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
