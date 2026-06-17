
import "../css/Education.css";

function Education() {
  const education = [
    {
      year: "2026",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "NVPAS College, CVM University",
      desc: "Graduated with a CGPA of 7.0 while building strong foundations in software engineering, databases, web development, and problem solving.",
      
      document: "/src/assets/sem_6.jpeg",
    },
    {
      year: "2028",
      degree: "Master of Computer Applications (MCA)",
      institution: "SRKSM College, GTU",
      desc: "Currently pursuing MCA with a focus on modern software development, cloud computing, system design, and scalable applications.",
      
      document: "#",
    },
  ];

  return (
    <section className="education" id="education">

      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>

      <div className="edu-header" data-aos="fade-up">

        <span className="section-tag">
          ACADEMIC JOURNEY
        </span>

        <h2>
          Education
        </h2>

        <p>
          My academic journey has been focused on
          software engineering,
          and continuously improving my technical skills.
        </p>
      </div>


      <div className="education-grid">
        {education.map((item, index) => (
          <div
            className="edu-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <div className="year-watermark">
              {item.year}
            </div>

            <div className="card-content">

              

              <h3>{item.degree}</h3>

              <h4>{item.institution}</h4>

              <p>{item.desc}</p>

              {/* <a
                href={item.document}
                target="_blank"
                rel="noreferrer"
                className="document-btn"
              >
                View 
              </a> */}

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Education;

