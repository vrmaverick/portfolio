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
          Heyy! I'm <b>Vedant Ranade</b>,a passionate developer with a keen interest in building various Machine Learning Models inorder to solve complex problems.
          I am currently persuing<br></br> <b>Bachlors in Artificial Inteligence and Data Science, University of Mumbai</b> 
          <br></br>
          <br></br>
          I have a strong background in Data Science and enjoy learning and working with the latest technologies to create better solutions.
        </p>
        <p>
          In my free time, I read tech blogs and try to learn and adapt to the new emerging technologies used in the feild by many experts,also follow expert's opinions based on their experience to improve the effeciency of my  future projects.I am always open for new challenges as i get an opportunity to develop.
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
