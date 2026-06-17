import { useState, useEffect } from "react";
import "../css/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""
        }`}
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      {/* Logo */}

      <div
        className="logo"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <span>Nirlon</span>

      </div>

      {/* Mobile Menu Button */}

      <div
        className="menu-icon"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        {menuOpen ? "✕" : "☰"}
      </div>

      {/* Navigation Links */}

      <ul
        className={`nav-links ${menuOpen ? "active" : ""
          }`}
      >
        <li
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <a
            href="#home"
            onClick={closeMenu}
          >
            Home
          </a>
        </li>

        <li
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <a
            href="#education"
            onClick={closeMenu}
          >
            Education
          </a>
        </li>

        <li
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <a
            href="#services"
            onClick={closeMenu}
          >
            Services
          </a>
        </li>

        <li
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <a
            href="#skills"
            onClick={closeMenu}
          >
            Skills
          </a>
        </li>

        <li
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <a
            href="#portfolio"
            onClick={closeMenu}
          >
            Projects
          </a>
        </li>

        <li
          data-aos="fade-down"
          data-aos-delay="600"
        >
          <a
            href="#whyhire"
            onClick={closeMenu}
          >
            Strengths
          </a>
        </li>

        <li
          data-aos="fade-down"
          data-aos-delay="700"
        >
          <a
            href="#certificates"
            onClick={closeMenu}
          >
            Certificates
          </a>
        </li>

        <li
          data-aos="fade-down"
          data-aos-delay="800"
        >
          <a
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* CTA Button */}

      <a
        href="#contact"
        className="hire-btn"
        data-aos="fade-left"
        data-aos-delay="900"
      >
        Hire Me
      </a>
    </nav>
  );
}

export default Navbar;