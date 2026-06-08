import React from "react";

function About() {
  return (
    <section className="about section-shell" id="about">
      <div className="about-image">
        <div className="hanging-frame">

        <div className="frame"> 
          <img 
            src="/Karan_image2.png" 
            alt="Karan P sitting portrait" />
        </div>
      </div>
      </div>

      <div className="about-copy">
        <h2>
          About <strong>Me</strong>
        </h2>

        <p>
          I am a B.Tech Information Technology student from Batlagundu,
          Dindigul, Tamil Nadu. I enjoy building secure backend systems,
          integrating databases, and shaping clear frontend experiences.
        </p>

        <p>
          My strongest project is AttendX, an offline-first smart attendance
          management system designed to preserve attendance records locally in
          SQLite and sync them to MySQL when internet connectivity returns.
        </p>
      </div>
    </section>
  );
}

export default About;
