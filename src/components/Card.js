import React from 'react';
import './Card.css';
import projectImage1 from '../images/deep2.png';
import projectImage2 from '../images/nav2.png';
import projectImage3 from '../images/food2.png';
import projectImage4 from '../images/loss-epoch.png';
import projectImage5 from '../images/reval.png';
import projectImage6 from '../images/invoice1.png';

const projects = [
  {
    image: projectImage1,
    title: "Ai-Generated Image Detector",
    description: "CNN based project Devloped in semester 6,Which is able to detect the ai generated or morphed images with 96% testing accuracy ",
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
    description: "Web application based on Wordpress and PHP developed in semester 3.The main purpose was to develop a platform that can connect NGO's with Food Donors",
    githubLink: "https://awintoursandtravels.com/zerowastage/"
  },
  {
    image: projectImage4,
    title: "RentalBike",
    description: "ANN built for predicting the total count of bikes rented at a given time and scenario,Which can be further scaled and used by the company to change price of renting a bike dynamically",
    githubLink: "https://github.com/vrmaverick/RentalBike"
  },
  {
    image: projectImage5,
    title: "Heart-Health",
    description: "Data Analysis and, highly reliable Ml model trained on various medical examination parameters to detect Heart disease",
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
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="githublink">
              View Code
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsGridComponent;
