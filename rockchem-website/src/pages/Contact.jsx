import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useMutation } from "@tanstack/react-query";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmailRequest = async () => {
    if (!formRef.current) {
      throw new Error("Form not found");
    }

    return emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formRef.current,
      {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      }
    );
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: sendEmailRequest,
    onSuccess: () => {
      setStatus("SUCCESS");
      formRef.current.reset();
    },
    onError: () => {
      setStatus("FAILED");
    },
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("");
    mutate();
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
            <input type="text" id="name" name="from_name" required placeholder="Your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" name="from_email" required placeholder="your@email.com" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" rows="5" required placeholder="Tell us about your project and please add your phone number at the end..."></textarea>
          </div>

          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>

          {status === "SUCCESS" && (
            <p className="success-message">Your message has been sent successfully!</p>
          )}

          {status === "FAILED" && (
            <p className="error-message">Something went wrong. Please try again.</p>
          )}
        </form>
      </section>

      <section className="contact-info">
        <h2>Our Details</h2>
        <p>Email: thabang@rockchemsolutions.co.za</p>
        <p>Phone: +27 76 891 8779</p>
        <p>Serving: Gauteng, Limpopo, North West, Free State, Mpumalanga, Northern Cape</p>
      </section>
    </div>
  );
};

export default Contact;