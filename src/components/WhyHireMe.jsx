import "../css/WhyHireMe.css";
import {
  FaCode,
  FaRocket,
  FaMobileAlt,
  FaLightbulb,
  FaDatabase,
  FaUsers
} from "react-icons/fa";

function WhyHireMe() {

  const reasons = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      desc: "Writing maintainable, scalable and industry-standard code."
    },
    {
      icon: <FaRocket />,
      title: "Fast Performance",
      desc: "Building optimized web applications with excellent performance."
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      desc: "Websites that work perfectly on desktop, tablet and mobile."
    },
    {
      icon: <FaDatabase />,
      title: "Full Stack Skills",
      desc: "Experience with React, Node.js, Express, MongoDB and MySQL."
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solver",
      desc: "Finding efficient solutions to complex technical challenges."
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      desc: "Strong communication and teamwork for successful projects."
    }
  ];

  return (
    <section className="why-hire" id="whyhire">

      <div
    className="why-header"
    data-aos="fade-left"
  >
        <span>WHY CHOOSE ME</span>
        <h2>My Strengths</h2>

        <p>
          I build modern, responsive and scalable web applications
          with a strong focus on performance, user experience and
          clean code practices.
        </p>
      </div>

      <div className="why-grid">

        {reasons.map((item, index) => (
           <div className="why-card" key={index}
          data-aos="zoom-in"
              data-aos-delay={index * 150}
          >

            <div className="why-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyHireMe;