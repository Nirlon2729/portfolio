import "../css/Portfolio.css";

import phpProject from "../assets/php-project.png";
import mernProject from "../assets/mern-project.png";

function Portfolio() {
  const projects = [
    {
      id: "01",
      title: "Frozen Dessert Selling System",
      image: phpProject,
      tech: ["PHP", "MySQL", "Bootstrap"],
      description:
        "A complete frozen dessert e-commerce website with authentication, shopping cart, product management, order tracking and search functionality.",
      github:
        "https://github.com/Nirlon2729/Cafe_mangement_system.git",
      demo: "#",
    },
    {
      id: "02",
      title: "MERN E-Commerce Website",
      image: mernProject,
      tech: ["MongoDB", "Express", "React", "Node.js"],
      description:
        "Full-stack e-commerce platform featuring JWT authentication, admin dashboard, product management, shopping cart, REST APIs and order tracking.",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div
    className="portfolio-header"
    data-aos="fade-right"
  >
     
        <span>MY WORK</span>
        <h2>Featured Projects</h2>
        <p>
          A collection of projects showcasing my skills in
          full-stack web development and modern technologies.
        </p>
      

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div
        className="project-card"
        key={index}
        data-aos="zoom-in"
        data-aos-delay={index * 150}
      >
            <div className="project-number">
              {project.id}
            </div>

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>

              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>

              <p>{project.description}</p>

              <div className="project-buttons">
                <a href={project.demo}>
                  Live Demo
                </a>

                <a href={project.github}>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Portfolio;