import React from "react";

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

        <div className="social-row" aria-label="Social links">
          <a
            href="https://github.com/KARANPERUMAL"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            GH
          </a>
          <a
            href="https://www.linkedin.com/in/karan-perumal"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            IN
          </a>
          <a
            href="https://leetcode.com/u/KARANPERUMAL/"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode profile"
          >
            LC
          </a>
          <a href={mailto} aria-label="Email Karan">
            @
          </a>
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
