function Hero() {
  const email = "karanperumaln@gmail.com";
  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    "Portfolio enquiry"
  )}`;

  return (
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
          Java Full Stack Developer fresher with hands-on experience in Spring
          Boot, REST APIs, MySQL, SQLite, React, and secure authentication using
          JWT and Spring Security.
        </p>

        <div className="social-row">
          <a href="https://github.com/KARANPERUMAL">GH</a>
          <a href="https://www.linkedin.com/in/karan-perumal">IN</a>
          <a href="https://leetcode.com/u/KARANPERUMAL/">LC</a>
          <a href={mailto}>@</a>
        </div>
      </div>

      <div className="hero-art">
        <img src="/profile.png" alt="Karan P" />
        <div className="desk-line" />
      </div>
    </section>
  );
}

export default Hero;