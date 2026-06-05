import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import {
  SiFigma,
  SiJavascript,
  SiMysql,
  SiPostman,
  SiReact,
  SiSpringboot,
  SiSqlite,
} from "react-icons/si";
import skills from "../data/skills.js";

const skillIcons = {
  Java: FaJava,
  JavaScript: SiJavascript,
  React: SiReact,
  "Spring Boot": SiSpringboot,
  "REST APIs": TbApi,
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
