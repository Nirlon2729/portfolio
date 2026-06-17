import "../css/Services.css";

import {
  FaLaptopCode,
  FaReact,
  FaPaintBrush,
  FaLink
} from "react-icons/fa";

function Services() {

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      desc: "Modern, responsive websites built with the latest technologies."
    },
    {
      icon: <FaReact />,
      title: "React Development",
      desc: "Interactive React applications with clean and scalable code."
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      desc: "Beautiful interfaces focused on user experience."
    },
    {
      icon: <FaLink />,
      title: "API Integration",
      desc: "REST API integration, authentication and backend connectivity."
    }
  ];

  return (
    <section className="services" id="services">

      <div
        className="services-header"
        data-aos="fade-right"
      >
        <span>WHAT I OFFER</span>

        <h2>My Services</h2>

        <p>
          Creating modern, responsive and high-performance web applications.
        </p>
      </div>

      <div className="services-grid">

        {services.map((service, index) => (

          <div
            className="service-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;