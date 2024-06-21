import React from 'react';
import './Card.css';
import projectImage1 from '../images/admin.png';
import projectImage2 from '../images/admin.png';
import projectImage3 from '../images/admin.png';
import projectImage4 from '../images/admin.png';
import projectImage5 from '../images/admin.png';
import projectImage6 from '../images/admin.png';

const projects = [
  {
    image: projectImage1,
    title: "Ai-Generated Image Detector",
    description: "CNN based project Devloped in semester 6",
    githubLink: "https://github.com/vrmaverick/DeepFake_Detector"
  },
  {
    image: projectImage2,
    title: "Ai based Navigation and Obstacle Avoidance",
    description: "Unity based simulation using Connection of C# with python This miniproject was develpoed in semester 5.",
    githubLink: "https://github.com/vrmaverick/Ai_Simulation_Unity"
  },
  {
    image: projectImage3,
    title: "Food Waste Management System",
    description: "Web application based on Wordpress and PHP developed in semester 3",
    githubLink: "https://awintoursandtravels.com/zerowastage/"
  },
  {
    image: projectImage4,
    title: "RentalBike",
    description: "ANN built for predicting the total count of bikes rented at a given time and scenario",
    githubLink: "https://github.com/vrmaverick/RentalBike"
  },
  {
    image: projectImage5,
    title: "Secondhand Car Evaluation",
    description: "ML model to predict the depreciated cost of a car over various parameters.",
    githubLink: "https://github.com/vrmaverick/Car_Valuation"
  },
  {
    image: projectImage6,
    title: "Invoice Generator",
    description: "Python Project Which Edits the invoice template dynamically and creats a PDF invoice Which can be directly mailed to the Customer",
    githubLink: "https://github.com/vrmaverick/InvoiceGenerator"
  }
];

const ProjectsGridComponent = () => {
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-info">
            <h2 className="title">{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
              View Code
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsGridComponent;
