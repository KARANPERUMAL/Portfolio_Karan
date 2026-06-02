function About() {
  return (
    <section className="about section-shell">
      <div className="about-image">
        <img src="/profile.png" alt="Karan P sitting portrait" />
      </div>

      <div className="about-copy">
        <h2>
          About <strong>Me</strong>
        </h2>

        <p>
          I am a B.Tech Information Technology student from Batlagundu,
          Dindigul, Tamil Nadu.
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