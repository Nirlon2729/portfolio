import { useState } from "react";
import "../css/Contact.css";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const handleSubmit = async (e) => {
  e.preventDefault();

  if (loading) return;

  // Check empty fields
  if (
    !formData.name.trim() ||
    !formData.email.trim() ||
    !formData.message.trim()
  ) {
    setStatusMessage("Please fill all fields.");

    setTimeout(() => {
      setStatusMessage("");
    }, 3000);

    return;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(formData.email)) {
    setStatusMessage("Please enter a valid email address.");

    setTimeout(() => {
      setStatusMessage("");
    }, 3000);

    return;
  }

  setLoading(true);
  setStatusMessage("");

  try {
    // Send message to you
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    // Send auto reply to visitor
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setStatusMessage("Your message has been sent successfully.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {
    console.error("EmailJS Error:", error);

    setStatusMessage(
      "Something went wrong. Please try again."
    );
  } finally {
    setLoading(false);

    setTimeout(() => {
      setStatusMessage("");
    }, 5000);
  }
};
  return (
    <section className="contact" id="contact">

      <div
        className="contact-header"
        data-aos="fade-right"
      >
        <span>GET IN TOUCH</span>
        <h2>Contact Me</h2>
        <p>
          Let's discuss your project, ideas, or opportunities.
          I'm always open to new collaborations.
        </p>
      </div>

      <div className="contact-wrapper">

        <div
          className="contact-info"
          data-aos="fade-up"
        >

          <h3>Let's Work Together </h3>

          <p>
            Feel free to contact me for freelance work,
            web development projects, internships,
            or collaboration opportunities.
          </p>



          <div className="info-item">
            Email id : nirlonmacwan27@gmail.com
          </div>

          <div className="info-item">
            Phone no. : +91 96870 07744
          </div>

          <div className="info-item">
            Address : Gujarat, India
          </div>
          <div className="contact-links">

            <a
              href="mailto:nirlonmacwan27@gmail.com"
              className="contact-icon email-btn"
            >
              <FaEnvelope />
              <span>Email Me</span>
            </a>

            <a
              href="https://wa.me/919687007744?text=Hello%20Nirlon,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noreferrer"
              className="contact-icon whatsapp-btn"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>

          </div>
        </div>

        <div
          className="hero-content"
          data-aos="fade-up"
        >
          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className={loading ? "loading-btn" : ""}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
            {statusMessage && (
              <div
                className={`toast ${statusMessage.includes("successfully")
                  ? "toast-success"
                  : "toast-error"
                  }`}
              >
                

                {statusMessage}
              </div>
            )}

          </form>
        </div>
      </div>

    </section>
  );
}

export default Contact;