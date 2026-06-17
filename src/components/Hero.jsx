import "../css/Hero.css";

import phpLogo from "../assets/logo1.png";
import reactLogo from "../assets/logo2.png";
import nodeLogo from "../assets/logo3.png";
import mongoLogo from "../assets/logo4.png";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Icons */}

      <div className="floating-icons">

        <img src={phpLogo} alt="" className="icon icon1" />
        <img src={reactLogo} alt="" className="icon icon2" />
        <img src={nodeLogo} alt="" className="icon icon3" />
        <img src={mongoLogo} alt="" className="icon icon4" />

      </div>

      {/* Floating Dots */}

      <div className="floating-dots">
        <span className="dot dot1"></span>
        <span className="dot dot2"></span>
        <span className="dot dot3"></span>
        <span className="dot dot4"></span>
        <span className="dot dot5"></span>
        <span className="dot dot6"></span>
      </div>

      <div className="hero-content">

        <a href="#contact"><div className="hero-badge">
          Available for work
        </div></a>

        <span className="hero-tag">
          Hello, I'm
        </span>

        <h1>Nirlon Macwan</h1>

        <h2>
          Full Stack Developer
        </h2>

        <p>
          Passionate Full Stack Developer creating
          modern, scalable and responsive web applications
          using React, Node.js, Express and MongoDB.
        </p>

        <div className="hero-buttons">

          <a href="#portfolio">
            View Projects
          </a>

          <a
            href="/src/assets/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>

        </div>

        {/* <div className="hero-stats">

          <div className="stat">
            <h3>10+</h3>
            <span>Projects</span>
          </div>

          <div className="stat">
            <h3>5+</h3>
            <span>Certificates</span>
          </div>

          <div className="stat">
            <h3>10+</h3>
            <span>Technologies</span>
          </div>

        </div> */}

      </div>



      

 
<a href="#education" className="hero-badge2">
  ↓
</a>
    

    </section>
  );
}

export default Hero;