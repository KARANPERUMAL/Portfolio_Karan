import React from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    label: "GitHub profile",
    href: "https://github.com/KARANPERUMAL",
    external: true,
    icon: FaGithub,
  },
  {
    label: "LinkedIn profile",
    href: "https://www.linkedin.com/in/karan-perumal",
    external: true,
    icon: FaLinkedinIn,
  },
  {
    label: "LeetCode profile",
    href: "https://leetcode.com/u/KARANPERUMAL/",
    external: true,
    icon: SiLeetcode,
  },
  {
    label: "Email Karan",
    href: "mailto:karanperumaln@gmail.com?subject=Portfolio%20enquiry",
    icon: FaEnvelope,
  },
];

function Hero() {
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
          {socialLinks.map(({ href, label, external, icon: Icon }) => (
            <a
              href={href}
              key={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              aria-label={label}
            >
              <Icon aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div className="hero-art">
        <img src="/Karan_image2.png" alt="Karan P" />
        <div className="desk-line" />
      </div>
    </section>
  );
}

export default Hero;
