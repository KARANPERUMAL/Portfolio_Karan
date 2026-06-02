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
          and project opportunities.
        </p>
      </div>

      <form className="contact-form" action={mailto}>
        <input placeholder="Your name" />
        <input placeholder="Email" />
        <textarea placeholder="How can I help?" rows="5" />
        <button type="submit">Get In Touch</button>
      </form>
    </section>
  );
}

export default Contact;