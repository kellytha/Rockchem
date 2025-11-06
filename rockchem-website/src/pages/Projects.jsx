import React from "react";
import "./Projects.css";

const projectData = [
  {
    id: 1,
    afterImg: "/projects/picture1.JPG",
    
  },
  {
    id: 2,
    afterImg: "/projects/picture2.jpeg"
  },
  {
    id: 3,
    afterImg: "/projects/picture3.jpeg"
  },
  {
    id: 4,
    afterImg: "/projects/picture4.jpeg"
  },
  {
    id: 5,
    afterImg: "/projects/picture5.jpeg"
  },
  {
    id: 6,
    afterImg: "/projects/picture6.jpeg"
  },
  {
    id: 7,
    afterImg: "/projects/picture7.jpeg"
  }
];

const Projects = () => {
  return (
    <div className="projects-page">
      <h1>Our Work</h1>
      <p className="intro-text">Here are some of the rock-breaking and excavation projects we've successfully completed.</p>

      <div className="projects-grid">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-images">
              <div className="image-block">
                <img src={project.afterImg} alt={`${project.title} After`} />
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

