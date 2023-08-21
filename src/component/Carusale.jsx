import React from 'react';
import { useEffect, useState } from 'react';
import image1 from '../assets/mega-wheel-live-tile.jpg';
import image2 from '../assets/sexy-gaming-fb.jpg';
import image3 from '../assets/CAM-65624_Luck-Casino-8_Teaser-mock-up-1657014102382_tcm1841-387549.jpg';
import image4 from '../assets/main-qimg-47c0a20d5465a82060a965ac30c3cc30-lq.jpeg';

const Carusale = () => {
    // second carusale

// first carusale
const images = [
    image1,
    image2,
    image3,
    image4,
    // Add more image URLs as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to update the current slide
  const changeSlide = (newSlide) => {
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    // Automatic slide change every 3 seconds
    const timer = setInterval(() => {
      changeSlide((currentSlide + 1) % images.length);
    }, 5000);

    // Clean up the interval on unmount
    return () => clearInterval(timer);
  }, [currentSlide, images.length]);
    return (
        <div className='grid grid-cols-12 gap-5'>

        {/* First Carusale? */}
        
             <div className="carousel col-span-12 lg:col-span-8">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item relative w-full h-52 lg:h-96 ${
                index === currentSlide ? '' : 'hidden'
              }`}
            >
              <img src={image} className="w-full rounded-2xl" alt="" />
            </div>
          ))}
    
        </div>
    
    
        {/* 2nd Carusale */}
        
        <div className="h-96 col-span-4 hidden lg:block carousel carousel-vertical rounded-box">
      <div className="carousel-item h-1/3 mb-3">
        <img src={image1} className='w-full'/>
      </div> 
      <div className="carousel-item h-1/3 mb-3">
        <img src={image2} className='w-full'/>
      </div> 
      <div className="carousel-item h-1/3 mb-3">
        <img src={image3} className='w-full'/>
      </div> 
      <div className="carousel-item h-1/3 mb-3">
        <img src={image4} className='w-full'/>
      </div> 
      <div className="carousel-item h-1/3 mb-3">
        <img src={image1} className='w-full'/>
      </div> 
      <div className="carousel-item h-1/3 mb-3">
        <img src={image2} className='w-full'/>
      </div> 
      <div className="carousel-item h-1/3 mb-3">
        <img src={image3} className='w-full'/>
      </div>
    </div>
        
          </div>
    );
};

export default Carusale;