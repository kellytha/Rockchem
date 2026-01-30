import React from "react";
import "./Services.css";

const services = [
  {
    id: 1,
    title: "Chemical Rock Breaking",
    description:
      "A safe and silent alternative to explosives using expanding chemicals. Ideal for urban environments and confined spaces.",
  },
  {
    id: 2,
    title: "Trenching",
    description:
      "Precision trenching for utility lines, foundations, and infrastructure projects.",
  },
  {
    id: 3,
    title: "Boulder Removal",
    description:
      "Efficient removal of large rocks obstructing roads, construction zones, and pipelines.",
  },
  {
    id: 4,
    title: "Foundation Lowering",
    description:
      "Lower existing foundations without structural damage — perfect for renovations and basement expansions.",
  },
  {
    id: 5,
    title: "Swimming Pool Excavation",
    description:
      "Silent and vibration-free rock breaking for pool installation in residential spaces.",
  },
  {
    id: 6,
    title: "Shaft Widening",
    description:
      "Expand existing shafts safely with precision in mining or underground projects.",
  },
];

const Services = () => {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <p className="services-intro">
        We specialize in non-explosive rock breaking and excavation services across South Africa.
        Whether you're working on a construction site or a residential property, RockChem delivers safe and effective results.
      </p>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

