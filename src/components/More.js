import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './More.css';

const projects = [
  {
    title: "PDF Short-Lister",
    githubLink: "https://github.com/vrmaverick/PDF-ShortLister"
  },
  {
    title: "Ml Based Heart Disease Predictor",
    githubLink: "https://github.com/vrmaverick/HeartHealth"
  },
  {
    title: "PineScript based Stock Strategy for Bots",
    githubLink: "https://github.com/vrmaverick/Alpha-Stock"
  },
//   {
//     title: "Project 4",
//     githubLink: "https://github.com/yourusername/project4"
//   },
//   {
//     title: "Project 5",
//     githubLink: "https://github.com/yourusername/project5"
//   },
//   {
//     title: "Project 6",
//     githubLink: "https://github.com/yourusername/project6"
//   },
  {
    title: "Miscellaneous Python Mini-Projects",
    githubLink: "https://github.com/vrmaverick/Python_projects"
  },
  {
    title: "Shipment Bidding",
    githubLink: "https://github.com/vrmaverick/Shipment_bidding"
  },
];

const ProjectListComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container">
      <div className="project-list-container" data-aos="fade-up">
        <h2 className="project-list-title">More Projects</h2>
        <table className="project-table">
          <thead>
            <tr>
              <th className='Title'>Title</th>
              <th className='Title'>GitHub Link</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td className='Title'>{project.title}</td>
                <td>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                    View Code
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="links-container" data-aos="fade-up">
        <h2 className="links-title">Download Links</h2>
        <ul className="links-list">
          <li>
            <a href="/path/to/report1.pdf" target="_blank" className="download-link">Download Report 1</a>
          </li>
          <li>
            <a href="/path/to/report2.pdf" target="_blank" className="download-link">Download Report 2</a>
          </li>
          <li>
            <a href="/path/to/resume.pdf" target="_blank" className="download-link">Download Resume</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectListComponent;
