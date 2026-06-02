import projects from "../data/projects";

function Projects() {
  return (
    <section className="projects" id="project">
      <div className="section-shell">
        <h2>
          My <strong>Projects</strong>
        </h2>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-image">{project.image}</div>

              <div className="project-copy">
                <span>{project.id}</span>
                <h3>{project.title}</h3>
                <p className="project-type">{project.type}</p>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;