import React from 'react';
import './About.css';
import aboutMeImage from '../images/profile.jpeg';

// const AboutMeComponent = () => {
//   return (
//     <div className="about-me-container">
//       <div className="about-me-photo">
//         <img src={aboutMeImage} alt="About Me" className="photo" />
//       </div>
//       <div className="about-me-text">
//         <p>
//           <h1><b>Heyy!, I'm Vedant</b></h1><br></br>
//           I am currently pursuing my <b>Master’s in Artificial Intelligence at Northeastern University, Boston</b>, with a concentration in Computer Vision.
//           <br></br>
//           <br></br>
//           I have a keen interest in building innovative Machine Learning and Deep Learning models to solve real-world challenges.
//           I possess a strong background in <b>Data Science, Artificial Intelligence, and Web Development</b>, and I love exploring cutting-edge technologies to develop efficient, scalable, and impactful solutions.
//         </p>
//         <br></br>
//         <p>
//           In my free time, I enjoy reading tech blogs, exploring emerging AI research, and following experts’ insights to continuously refine my approach to problem-solving.
//           Besides tech, my hobbies include being an <b>Aquarium hobbyist</b>, <b>Geopolitical analysis</b>, <b>Chess</b>, and <b>Cricket</b>.
//         </p>
//         <br></br>
//         <p>
//           <b>Let's connect and create something amazing together!</b>
//         </p>
//       </div>
//     </div>
//   );
// }

const AboutMeComponent = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-photo">
        <img src={aboutMeImage} alt="About Me" className="photo" />
      </div>
      <div className="about-me-text">
        <p>
          <h1><b>Hey there! I'm Vedant 👋</b></h1><br></br>
          I’m currently pursuing my <b>Master’s in Artificial Intelligence</b> at <b>Northeastern University, Boston</b>, with a concentration in <b>Machine Learning</b>.
          <br></br><br></br>
          I’m passionate about developing intelligent systems that combine creativity and data-driven insight. 
          My interests span in various domains like : <b>Machine Learning, Deep Learning, Data analysis , Backend scripting, Agentic AI, Generative AI </b>. I love experimenting with emerging technologies to build efficient and impactful solutions.
          <br></br><br></br><b>November 2026 Goal :</b> Currently working on Agentic AI project, completing CV official certification, I will then be learning Snowflake platform by the mid november then proceed with AWS certification.
        </p>
        <br></br>
        <p>
          Beyond academics, I enjoy reading tech blogs, exploring the latest AI research, and following thought leaders who are shaping the future of technology. 
          Outside of tech, you’ll often find me indulging in my hobbies — <b>aquarium keeping</b>, <b>geopolitical analysis</b>, <b>chess</b>, and <b>cricket</b>.
        </p>
        <br></br>
        <p>
          <b>Let’s connect and bring innovative ideas to life!</b>
        </p>
      </div>
    </div>
  );
}

export default AboutMeComponent;
