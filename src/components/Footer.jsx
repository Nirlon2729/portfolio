import "../css/Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import { useState, useEffect } from "react";

function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const currentDate = time.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const currentTime = time.toLocaleTimeString();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>Nirlon Macwan</h2>

          <p>
            Full Stack Web Developer specializing in
            React, Node.js, MongoDB and modern web
            applications.
          </p>
        </div>

        <div className="footer-right">
          <a
            href="mailto:nirlonmacwan27@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://wa.me/919687007744"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.instagram.com/macwan_nirlon/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/nirlon-macwan"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Nirlon2729"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>

     

      <div className="footer-bottom">
        © 2026 All Rights Reserved.
        <br />
        Created by Nirlon Macwan.
        <br />
        Portfolio || {currentDate} || {currentTime}</div>
    </footer>
  );
}

export default Footer;