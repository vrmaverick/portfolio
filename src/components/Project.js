import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import "./Project.css";
import image1 from '../images/deep1.png';
import image2 from '../images/nav3.png';
import image3 from '../images/food1.png';

function App() {
  const slides = [
    {
      url: image1,
      content : (
        <h3 className='desc'>
          DeepFake Detection application hosted on Azure Cloud
          {/* <a href="https://example.com " style={{margin:'0 5px'}}>Read More ...</a>. */}
        </h3>
      ),
    },
    {
      url: image2,
      content : <h3 className='desc'>
      Simulation of Ai-Based Obstacle Avoidnace And Navigation
      {/* <a href="https://example.com " style={{margin:'0 5px'}}>Read More ...</a>. */}
    </h3>
    },
    {
      url: image3,
      content :  <h3 className='desc'>
      Food Waste Management System used To connect Donors to NGO's locally
      {/* <a href="https://example.com " style={{margin:'0 5px'}}>Read More ...</a>. */}
    </h3>
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentContent, setCurrentContent] = useState(slides[0].content);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setCurrentContent(slides[newIndex].content)
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setCurrentContent(slides[newIndex].content)
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    setCurrentContent(slides[slideIndex].content)
  };

  return (
    <div className='max-w-[1000px] h-[500px] w-full m-auto py-10 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='image-container'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
      <div className='content-container'>
        <div className="center-content">
          {currentContent}
        </div>
      </div>
    </div>
  );
}

export default App;
