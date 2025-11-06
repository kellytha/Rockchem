import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear about your project. Fill out the form and we’ll get back to you shortly.</p>
      </section>

      <section className="contact-form-section">
        <form className="contact-form">
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
        </form>
      </section>

      <section className="contact-info">
        <h2>Our Details</h2>
        <p>Email: info@rockchem.co.za</p>
        <p>Phone: +27 12 345 6789</p>
        <p>Serving: Gauteng, Limpopo, North West, Free State, Mpumalanga and Northern Cape</p>
      </section>
    </div>
  );
};

export default Contact;

