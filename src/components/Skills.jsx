import skills from "../data/skills";

function Skills() {
  return (
    <section className="skills section-shell" id="skills">
      <h2>
        My <strong>Skills</strong>
      </h2>

      <div className="skill-grid">
        {skills.map((skill, index) => (
          <article
            className={index === 2 ? "skill-card active" : "skill-card"}
            key={skill}
          >
            <span>{skill.slice(0, 2).toUpperCase()}</span>
            <strong>{skill}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;