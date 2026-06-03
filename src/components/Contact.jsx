import React from "react";

function Contact() {
  const email = "karanperumaln@gmail.com";
  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    "Portfolio enquiry"
  )}`;

  return (
    <section className="contact section-shell" id="contact">
      <div>
        <h2>
          Let's <strong>talk</strong> for something special
        </h2>

        <p>
          I am open to fresher Java Full Stack Developer roles, internships,
          and project opportunities where I can contribute with Spring Boot,
          React, and database-driven applications.
        </p>
      </div>

      <form
        className="contact-form"
        action={mailto}
        method="post"
        encType="text/plain"
      >
        <input aria-label="Name" name="name" placeholder="Your name" />
        <input aria-label="Email" name="email" placeholder="Email" />
        <textarea
          aria-label="Message"
          name="message"
          placeholder="How can I help?"
          rows="5"
        />
        <button type="submit">Get In Touch</button>
      </form>
    </section>
  );
}

export default Contact;
