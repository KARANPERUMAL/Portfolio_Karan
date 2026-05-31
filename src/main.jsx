import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  "Java",
  "JavaScript",
  "React",
  "Spring Boot",
  "REST APIs",
  "MySQL",
  "SQLite",
  "Postman",
  "GitHub",
  "Figma",
];

const projects = [
  {
    id: "01",
    title: "AttendX",
    type: "Offline-first attendance system",
    image: "AX",
    description:
      "Smart attendance management system with OTP authentication, role-based APIs, JWT security, and SQLite-to-MySQL synchronization.",
  },
  {
    id: "02",
    title: "Smart Parking System",
    type: "Backend booking platform",
    image: "SP",
    description:
      "Spring Boot REST API system for parking slot availability, booking, cancellation, and maintainable controller-service-repository architecture.",
  },
  {
    id: "03",
    title: "JWT Todo Application",
    type: "Secure task management",
    image: "TD",
    description:
      "JWT-secured Todo backend with user registration, login, authorization, and APIs for creating, updating, deleting, and retrieving tasks.",
  },
];

const experiences = [
  {
    company: "Gradtwin Edutech",
    role: "Java Full Stack Intern",
    date: "Mar 2026 - Present",
    description:
      "Developed full-stack modules with Java, Spring Boot, HTML, CSS, JavaScript, and MySQL while debugging, testing, and improving application performance.",
  },
  {
    company: "Pumo Technovation Pvt Ltd",
    role: "UI/UX Design Intern",
    date: "Jun 2025 - Jul 2025",
    description:
      "Applied user-centered design with Figma and Photoshop, including UX research, wireframing, prototyping, and responsive web/mobile interface design.",
  },
  {
    company: "NPR College of Engineering and Technology",
    role: "B.Tech Information Technology",
    date: "2022 - Present",
    description:
      "Current CGPA 8.1, with honours in CSE and strong fundamentals in OOP, data structures, DBMS, backend development, and database integration.",
  },
];

const certifications = [
  "Google UX Design",
  "CCNAv7: Switching, Routing, and Wireless Essentials",
  "CCNAv7: Introduction to Networks",
  "SAS SQL",
  "Infosys Springboard Full Stack Developer Programming",
];

function App() {
  const email = "karanperumaln@gmail.com";
  const mailto = `mailto:${email}?subject=${encodeURIComponent("Portfolio enquiry")}`;

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home">
          <span className="brand-mark">P</span>
          <span>Personal</span>
        </a>
        <nav>
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact Me</a>
        </nav>
        <a className="resume-button" href="/karan-resume.pdf" download>
          Resume
          <span aria-hidden="true">↓</span>
        </a>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <h1>
            Hello I am <strong>Karan P.</strong>
            <br />
            <strong>Java Full Stack</strong> Developer
            <br />
            Based In <strong>India.</strong>
          </h1>
          <p>
            Java Full Stack Developer fresher with hands-on experience in Spring Boot, REST APIs, MySQL, SQLite, React,
            and secure authentication using JWT and Spring Security.
          </p>
          <div className="social-row" aria-label="Social links">
            <a href="https://github.com/KARANPERUMAL" target="_blank" rel="noreferrer">
              GH
            </a>
            <a href="https://www.linkedin.com/in/karan-perumal" target="_blank" rel="noreferrer">
              IN
            </a>
            <a href="https://leetcode.com/u/KARANPERUMAL/" target="_blank" rel="noreferrer">
              LC
            </a>
            <a href={mailto}>@</a>
          </div>
        </div>
        <div className="hero-art">
          <img src="/profile.png" alt="Karan P" />
          <div className="desk-line" />
        </div>
      </section>

      <section className="skills section-shell" id="skills">
        <h2>
          My <strong>Skills</strong>
        </h2>
        <div className="skill-grid">
          {skills.map((skill, index) => (
            <article className={index === 2 ? "skill-card active" : "skill-card"} key={skill}>
              <span>{skill.slice(0, 2).toUpperCase()}</span>
              <strong>{skill}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="experience" id="about">
        <div className="section-shell">
          <h2>
            My <strong>Experience</strong>
          </h2>
          <div className="experience-list">
            {experiences.map((item, index) => (
              <article className={index === 1 ? "experience-card muted" : "experience-card"} key={item.role}>
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

      <section className="about section-shell">
        <div className="about-image">
          <img src="/profile.png" alt="Karan P sitting portrait" />
        </div>
        <div className="about-copy">
          <h2>
            About <strong>Me</strong>
          </h2>
          <p>
            I am a B.Tech Information Technology student from Batlagundu, Dindigul, Tamil Nadu. I enjoy building secure
            backend systems, integrating databases, and shaping clear frontend experiences.
          </p>
          <p>
            My strongest project is AttendX, an offline-first smart attendance management system designed to preserve
            attendance records locally in SQLite and sync them to MySQL when internet connectivity returns.
          </p>
        </div>
      </section>

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

      <section className="testimonial section-shell">
        <h2>
          My <strong>Certifications</strong>
        </h2>
        <div className="cert-grid">
          {certifications.map((item) => (
            <article className="cert-card" key={item}>
              {item}
            </article>
          ))}
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div>
          <h2>
            Let's <strong>talk</strong> for something special
          </h2>
          <p>
            I am open to fresher Java Full Stack Developer roles, internships, and project opportunities where I can
            contribute with Spring Boot, React, and database-driven applications.
          </p>
        </div>
        <form className="contact-form" action={mailto}>
          <input aria-label="Name" placeholder="Your name" />
          <input aria-label="Email" placeholder="Email" />
          <textarea aria-label="Message" placeholder="How can I help?" rows="5" />
          <button type="submit">Get In Touch</button>
        </form>
      </section>

      <footer>
        <span className="brand-mark">P</span>
        <strong>Karan P</strong>
        <span>{email}</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
