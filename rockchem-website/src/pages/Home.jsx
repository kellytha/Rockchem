import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">

      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Your Ultimate Solution to Rock Breaking</h1>
          <p>Non-explosive demolition for mining and construction excellence.</p>
          <Link to="/contact" className="cta-button">Request a Quote</Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="intro">
        <h2>Welcome to RockChem Solutions</h2>
        <p>
          RockChem Solutions is South Africa’s leader in non-explosive rock-breaking.
          We specialise in safe, and environmentally friendly rock-breaking with expanding chemical, which provides an 
          environmentally friendly alternative to traditional blasting method.
        </p>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <h2>Our Core Services</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Chemical Rock Breaking</h3>
            <p>Silent, vibration-free breaking for all rock types using expanding chemicals.</p>
          </div>
          <div className="card">
            <h3>Trenching & Excavation</h3>
            <p>Dig trenches for utilities, pools, and foundations—precisely and safely.</p>
          </div>
          <div className="card">
            <h3>Boulder Removal</h3>
            <p>Break down large rocks and widen shafts in residential or mining sites.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose RockChem?</h2>
        <ul>
          <li> No blasting permits required</li>
          <li> Safe and Non-Explosive </li>
          <li> Environmentally friendly </li>
          <li> Cost Effective and Efficient </li>
          <li> Versatile Applications </li>
          <li> Expert Service </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <h2>Ready to Break New Ground?</h2>
        <p>Contact us today to get a custom quote or book a free site assessment.</p>
        <Link to="/contact" className="cta-button">Get in Touch</Link>
      </section>

    </div>
  );
};

export default Home;

