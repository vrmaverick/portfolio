import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './More.css';
import java from '../images/java.svg';
import python from '../images/python.png';
import sk from '../images/sklearn.png';
import tf from '../images/tf.svg';
import sql from '../images/sql-server.png';
import unity from '../images/unity.png';
import azure from '../images/azure.png';
import tailwind from '../images/tl.svg';
import jsIcon from '../images/java-script.png';
import reactIcon from '../images/atom.png';

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
  {
    title: "Miscellaneous Python Mini-Projects",
    githubLink: "https://github.com/vrmaverick/Python_projects"
  },
  {
    title: "Shipment Bidding",
    githubLink: "https://github.com/vrmaverick/Shipment_bidding"
  },
];
const skills = [
  { name: 'Python', icon: python },
  { name: 'sklearn', icon: sk },
  { name: 'Tensorflow', icon: tf },
  { name: 'sql', icon: sql },
  { name: 'azure', icon: azure },
  { name: 'Unity', icon: unity },
  { name: 'tailwind', icon: tailwind },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Java', icon: java }
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
        <h2 className="links-title">Reports</h2>
        <div className='Down'>
        <ul className="links-list">
          <li>
            {/* <p>Food Waste Management Report</p> */}
            <a href="/path/to/report1.pdf" target="_blank" className="download-link" download>Food Waste Management Report</a>
          </li>
          <li>
            <a href="/path/to/report2.pdf" target="_blank" className="download-link" download>Ai-based Obstacle Detction and Navigation Report</a>
          </li>
          <li>
            <a href="/path/to/resume.pdf" target="_blank" className="download-link" download>Ml based DeepFake Detection Report</a>
          </li>
        </ul>
        </div>
        <h2 className="links-title skills">Familiar with</h2>
        <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
            {/* {skill.name} */}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default ProjectListComponent;