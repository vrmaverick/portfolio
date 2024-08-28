import React from 'react';
import './About.css';
import aboutMeImage from '../images/profile.png';

const AboutMeComponent = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-photo">
        <img src={aboutMeImage} alt="About Me" className="photo" />
      </div>
      <div className="about-me-text">
        {/* <h1>About Me</h1> */}
        <p>
          <h1><b>Heyy!, I'm Vedant</b></h1><br></br>
          I am currently persuing<br></br> <b>Bachlors in Artificial Inteligence and Data Science, University of Mumbai</b>, and about to complete in May 2025 
          <br></br>
          <br></br>
          I have a keen interest in building various Machine Learning Models in order to solve complex problems.
          I have a strong background in fields of Data Science and Web Development and I enjoy learning and working with the latest technologies to create better solutions.
        </p>
        <br></br>
        <p>
          In my free time, I read tech blogs and try to learn and adapt to the new emerging technologies used in the field by many experts, also follow expert's opinions based on their experience to improve the efficiency of my future work, Besides this my hobbies are : Aquarium hobbyist, Geopolitical analysis, Chess and Cricket 
        </p>
        <br></br>
        <p>
        <b>Let's connect and create something amazing together!</b>
        </p>
      </div>
    </div>
  );
}

export default AboutMeComponent;
