import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Experience.css';
import Resume from '../reports/Resume.pdf'
import { Element } from "react-scroll";

const experiences = [
  {
    title: "Python Developer Intern",
    company: "Web Creations, Dombivali, India",
    duration: "Jun 2025 - Jul 2025",
    description:
      "Upgraded management portal using Flask and SQL for real-time data visualization. Implemented a 3D rendering model using transformers, solving a complex technical requirement for the client. Optimized workflows for large data directories, proposing architectural upgrades to improve system scalability.",
    technologies: ["Python", "Hugging Face", "Pytorch", "GCP"]
  },
  {
    title: "Web Developer Intern",
    company: "Web Creations, Dombivali, India",
    duration: "Dec 2023 - Dec 2023",
    description:
      "Developed and maintained a PHP-based backend automation and ensured efficient data management using SQL. Customized websites as per evolving requirements, improving user experience, and demonstrating adaptability. Collaborated cross-functionally with design and development teams to accelerate project delivery and quality.",
    technologies: ["Flask", "PHP", "Postgres", "Git"]
  }
];

const education = [
  {
    degree: "Master of Science in Artificial Intelligence",
    school: "Northeastern University, Boston, MA",
    duration: "2025 - 2027",
    description:
      "Cocentration in Machine Learning, Foundations of AI, Linear Algebra and Probablity, Algorithms, Pattern Recognition",
    highlights: ["Industry-focused projects like Personal Expense Forecasting"]
  },
  {
    degree: "Bachelor of Engineering in Artificial Intelligence and Data Science",
    school: "University of Mumbai, India",
    duration: "2021 - 2025",
    description:
      "Built strong foundations in algorithms, database, web development Deep Learning, NLP, Cloud Computing, and Data Mining with a focus on end‑to‑end ML systems and production deployment. while leading multiple technical projects and a hackathon team.",
    highlights: ["GPA 3.74/4.0", "Student committee technical and sponsorship team member", "Class Represntative in Junior and Senior years"]
  }
];

// Replace this URL with your actual hosted resume PDF
const RESUME_URL = "https://github.com/vrmaverick/portfolio/blob/main/src/reports/Resume.pdf"; // or Google Drive preview link [web:92][web:95]

const ExperienceComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // return (
  //   <div className="experience-container">
  //     <div className="experience-content" data-aos="fade-up">
  //       {/* Work Experience */}
  //       <h2 className="experience-title">Work Experience</h2>
  //       <div className="experience-list">
  //         {experiences.map((exp, index) => (
  //           <div
  //             key={index}
  //             className="experience-item"
  //             data-aos="fade-up"
  //             data-aos-delay={index * 100}
  //           >
  //             <div className="experience-header">
  //               <div className="experience-main-info">
  //                 <h3 className="experience-job-title">{exp.title}</h3>
  //                 <p className="experience-company">{exp.company}</p>
  //               </div>
  //               <p className="experience-duration">{exp.duration}</p>
  //             </div>
  //             <p className="experience-description">{exp.description}</p>
  //             <div className="experience-technologies">
  //               {exp.technologies.map((tech, techIndex) => (
  //                 <span key={techIndex} className="tech-badge">
  //                   {tech}
  //                 </span>
  //               ))}
  //             </div>
  //           </div>
  //         ))}
  //       </div>

  //       {/* Education */}
  //       <h2 className="experience-title education-title">Education</h2>
  //       <div className="experience-list">
  //         {education.map((edu, index) => (
  //           <div
  //             key={index}
  //             className="experience-item"
  //             data-aos="fade-up"
  //             data-aos-delay={index * 100}
  //           >
  //             <div className="experience-header">
  //               <div className="experience-main-info">
  //                 <h3 className="experience-job-title">{edu.degree}</h3>
  //                 <p className="experience-company">{edu.school}</p>
  //               </div>
  //               <p className="experience-duration">{edu.duration}</p>
  //             </div>
  //             <p className="experience-description">{edu.description}</p>
  //             <div className="experience-technologies">
  //               {edu.highlights.map((item, itemIndex) => (
  //                 <span key={itemIndex} className="tech-badge">
  //                   {item}
  //                 </span>
  //               ))}
  //             </div>
  //           </div>
  //         ))}
  //       </div>

  //       {/* Embedded Resume */}
  //       <h2 className="experience-title resume-title">Resume</h2>
  //       <div
  //         className="resume-card"
  //         data-aos="fade-up"
  //         data-aos-delay={150}
  //       >
  //         <div className="resume-header-row">
  //           <h3 className="experience-job-title">View My Resume</h3>
  //           <a
  //             href={RESUME_URL}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="resume-download-link"
  //           >
  //             Open in new tab ↗
  //           </a>
  //         </div>
  //         <div className="resume-embed-wrapper">
  //           <iframe
  //             src={RESUME_URL}
  //             title="Vedant Resume"
  //             className="resume-iframe"
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
return (
  <>
    <Element name="experience">
      <div className="experience-container">
        <div className="experience-content" data-aos="fade-up">
          {/* Two-column glass layout */}
          <div className="experience-columns">
            {/* Left: Work */}
            <div className="experience-column">
              <h2 className="experience-title">Work Experience</h2>
              <div className="experience-list">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="experience-item"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="experience-header">
                      <div className="experience-main-info">
                        <h3 className="experience-job-title">{exp.title}</h3>
                        <p className="experience-company">{exp.company}</p>
                      </div>
                      <p className="experience-duration">{exp.duration}</p>
                    </div>
                    <p className="experience-description">{exp.description}</p>
                    <div className="experience-technologies">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Education */}
            <div className="experience-column">
              <h2 className="experience-title">Education</h2>
              <div className="experience-list">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="experience-item"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="experience-header">
                      <div className="experience-main-info">
                        <h3 className="experience-job-title">{edu.degree}</h3>
                        <p className="experience-company">{edu.school}</p>
                      </div>
                      <p className="experience-duration">{edu.duration}</p>
                    </div>
                    <p className="experience-description">{edu.description}</p>
                    <div className="experience-technologies">
                      {edu.highlights.map((item, itemIndex) => (
                        <span key={itemIndex} className="tech-badge">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resume section under columns */}
          <Element name="resume">
            <h2 className="experience-title resume-title">Resume</h2>
            <div className="resume-card" data-aos="fade-up" data-aos-delay={150}>
              <div className="resume-header-row">
                <h3 className="experience-job-title">View My Resume</h3>
                <a
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-download-link"
                >
                  Open in new tab ↗
                </a>
              </div>
              <div className="resume-embed-wrapper">
                <iframe
                  src={Resume}
                  title="Vedant Resume"
                  className="resume-iframe"
                />
              </div>
            </div>
          </Element>
        </div>
      </div>
    </Element>
  </>
);



};

export default ExperienceComponent;
