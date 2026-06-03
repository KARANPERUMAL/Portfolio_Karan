import React from "react";

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home">
        <span className="brand-mark">P</span>
        <span>Personal</span>
      </a>

      <nav>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Project</a>
        <a href="#contact">Contact Me</a>
      </nav>

      <a className="resume-button" href="/karan-resume.pdf" download>
        Resume
        <span aria-hidden="true">v</span>
      </a>
    </header>
  );
}

export default Header;
