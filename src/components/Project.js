import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import "./ProjectSlider.css";  // make sure the name matches

import image4 from "../images/Forecast.png";
import image2 from "../images/nav3.png";
// import image1 from "../images/deep1.png";
import image3 from "../images/food1.png";

function ProjectSlider() {
  const slides = [
    { url: image4, content: <h3 className="desc">Expense Forecasting using Ensemble Modelling</h3> },
    { url: image2, content: <h3 className="desc">Simulation of AI-Based Obstacle Avoidance And Navigation Algorithms</h3> },
    // { url: image1, content: <h3 className="desc">DeepFake Image Detection hosted on Azure Cloud</h3> },
    { url: image3, content: <h3 className="desc">Food Waste Management System used To connect Donors to NGO's locally</h3> },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => setCurrentIndex(slideIndex);

  return (
    // <div className="project-slider banner-wrapper">
    <div className="project-slider relative">
      {/* Image */}
      <div className="banner-image"
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "400px",
          borderRadius: "10px",
        }}
      />

      {/* Arrows using your CSS */}
      <div className="custom-arrow prev" onClick={prevSlide}>
        <BsChevronCompactLeft size={30} />
      </div>
      <div className="custom-arrow next" onClick={nextSlide}>
        <BsChevronCompactRight size={30} />
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            style={{
              cursor: "pointer",
              color: slideIndex === currentIndex ? "#000" : "#aaa",
              fontSize: "24px",
            }}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>

      {/* Caption */}
{/* Caption overlay */}
<div className="caption-overlay">
  {slides[currentIndex].content}
</div>
</div>
  );
}

export default ProjectSlider;
