import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About RockChem Solutions</h1>
        <p>Your trusted partner in non-explosive rock breaking across South Africa.</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To satisfy clients with a dependable service, decreased risk, and outstanding value by offering safe , efficient , and enviromntally friendly
            rock-breaking methods that replace old blasting methods. 
          </p>
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            To be South Afican's most trusted brand in non-explosive rock-breaking, setting the gold standard for innovation, safety, and sustainability.
          </p>
        </div>

        <div className="about-section">
          <h2>Company Background</h2>
          <p>
            Founded in 2024, Rockchem solutions is a specialist provider of non-explosive rock-breaking services using Nex-Pand expanding chemical technology. We provide a safer, more regulated approach to traditional blasting - delivering proficient , cost-effective , and reliable results.
          </p>
        </div>

        <div className="about-section">
          <h2>Service Regions</h2>
          <p>
            We proudly serve clients across:
            <ul>
              <li>Gauteng</li>
              <li>Limpopo</li>
              <li>North West</li>
              <li>Free State</li>
              <li>Northern Cape</li>
              <li>Mpumalanga</li>
            </ul>
            Our mobile teams ensure responsive service delivery wherever your site is located.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose RockChem?</h2>
          <ul className="about-benefits">
            <li> Non-explosive, low-risk methods</li>
            <li> Environmentally safe and dust-free</li>
            <li> Affordable and highly effective in confined spaces</li>
            <li> No special permits required</li>
            <li> Suitable for residential, commercial, and industrial projects</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;

