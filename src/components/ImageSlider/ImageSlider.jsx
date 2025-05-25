        
        
        
import React, { useEffect, useState } from 'react';
import './ImageSlider.css';

const images = [
        "https://www.wbhealth.gov.in/images/1.jpg",
        "https://www.wbhealth.gov.in/images/2.jpg",
        "https://www.wbhealth.gov.in/images/3.jpg",
        "https://www.wbhealth.gov.in/images/7.jpg",
        "https://www.wbhealth.gov.in/images/8.jpg",
        "https://www.wbhealth.gov.in/images/12.jpg",
        "https://www.wbhealth.gov.in/images/13.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 2000); // 2 seconds delay

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="slider-container">
      <div
        className="slider-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} className="slide-image" />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

        
        
        
        
        
        
        
        
        
        
        