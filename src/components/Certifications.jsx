import certifications from "../data/certifications";

function Certifications() {
  return (
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
  );
}

export default Certifications;