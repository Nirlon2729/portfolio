import { useState } from "react";
import "../css/Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
} from "react-icons/si";

function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const skills = {
    all: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],

    frontend: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
    ],

    backend: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "PHP", icon: <FaPhp /> },
    ],

    database: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  };

  return (
    <section className="skills" id="skills">

      <div
        className="skills-header"
        data-aos="fade-up"
      >
        <span>TECHNOLOGIES</span>

        <h2>My Skills</h2>

        <p>
          Technologies and tools I use to build
          modern, scalable and responsive
          web applications.
        </p>
      </div>

      <div
        className="skills-nav"
        data-aos="zoom-in"
      >
        <button
          className={activeTab === "all" ? "active" : ""}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>

        <button
          className={activeTab === "frontend" ? "active" : ""}
          onClick={() => setActiveTab("frontend")}
        >
          Frontend
        </button>

        <button
          className={activeTab === "backend" ? "active" : ""}
          onClick={() => setActiveTab("backend")}
        >
          Backend
        </button>

        <button
          className={activeTab === "database" ? "active" : ""}
          onClick={() => setActiveTab("database")}
        >
          Database
        </button>
      </div>

      <div
        className="skills-grid"
        key={activeTab}
      >
        {skills[activeTab].map((skill, index) => (
          <div
            className="skill-card"
            key={index}
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
          >
            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;