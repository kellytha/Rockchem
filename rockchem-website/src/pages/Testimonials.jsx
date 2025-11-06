import React, { useState } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTestimonials([...testimonials, formData]);
    setFormData({ name: "", rating: 5, feedback: "" });
  };

  return (
    <div className="testimonials-page">
      <h1>Client Testimonials</h1>
      <p className="intro-text">Leave your feedback about our service below.</p>

      {/* Display testimonials */}
      {testimonials.length > 0 && (
        <div className="testimonial-list">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="testimonial-header">
                <strong>{t.name}</strong>
                <div className="stars">
                  {"★".repeat(t.rating)}
                  {"☆".repeat(5 - t.rating)}
                </div>
              </div>
              <p className="feedback-text">"{t.feedback}"</p>
            </div>
          ))}
        </div>
      )}

      {/* Feedback Form */}
      <div className="testimonial-form">
        <h2>Leave a Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label>Rating *</label>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
            >
              <option value={5}>★★★★★</option>
              <option value={4}>★★★★</option>
              <option value={3}>★★★</option>
              <option value={2}>★★</option>
              <option value={1}>★</option>
            </select>
          </div>

          <div className="form-group">
            <label>Feedback *</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Share your experience..."
            ></textarea>
          </div>

          <button type="submit" className="submit-button">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default Testimonials;

