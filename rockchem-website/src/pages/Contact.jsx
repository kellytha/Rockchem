import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

      emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("SUCCESS");
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("FAILED");
        }
      );
  };

  return (
    <div className="contact-page">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear about your project. Fill out the form and we’ll get back to you shortly.</p>
      </section>

      <section className="contact-form-section">
        <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input type="text" id="name" name="name" required placeholder="Your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" name="email" required placeholder="your@email.com" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="+27 123 456 789" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" rows="5" required placeholder="Tell us about your site or project..."></textarea>
          </div>

          <button type="submit" className="submit-button">Send Message</button>

          {status === "SUCCESS" && <p className="success-message">Your message has been sent successfully!</p>}
          {status === "FAILED" && <p className="error-message">Something went wrong. Please try again.</p>}
        </form>
      </section>

      <section className="contact-info">
        <h2>Our Details</h2>
        <p>Email: thabang@rockchemsolutions.co.za</p>
        <p>Phone: +27 76 891 8779</p>
        <p>Serving: Gauteng, Limpopo, North West, Free State, Mpumalanga and Northern Cape</p>
      </section>
    </div>
  );
};

export default Contact;
