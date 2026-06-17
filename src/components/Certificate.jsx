import "../css/Certificate.css";

function Certificate() {
  const certificates = [
    {
      title: "Certificate Course in Computer Concepts (CCC) and Programming in C",
      issuer: "Siddh Institute, Anand",
      date: "July 2023",
      grade: "A+",
      description:
        "Completed CCC certification and office tools ,Learned C programming fundamentals including arrays, pointers, functions, structures, file handling, and problem solving.",
    },

    {
      title: "Python Basics: Selection & Iteration",
      issuer: "Coursera • Codio",
      date: "January 2025",
      grade: "Verified",
      description:
        "Covered conditional statements, loops, iteration techniques, and logical problem solving using Python.",
    },

    {
      title: "Python Basic Structures: Lists, Strings & Files",
      issuer: "Coursera • Codio",
      date: "January 2025",
      grade: "Verified",
      description:
        "Learned Python lists, strings, file operations, and essential data manipulation concepts.",
    },
  ];

  return (
    <section className="certificate-section" id="certificates">

      <div className="certificate-header">
        <span className="certificate-tag">
          ACHIEVEMENTS
        </span>

        <h2>Certificates</h2>

        <p>
          Certifications earned through continuous learning,
          programming practice, and skill development.
        </p>
      </div>

      <div className="certificate-grid">

        {certificates.map((certificate, index) => (
          <div
            className="certificate-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >

            <div className="certificate-top">

              

              <span className="certificate-grade">
                {certificate.grade}
              </span>

            </div>

            <h3>
              {certificate.title}
            </h3>

            <h4>
              {certificate.issuer}
            </h4>

            <span className="certificate-date">
              {certificate.date}
            </span>

            <p>
              {certificate.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Certificate;