import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (images.length === 1) {
    return (
      <div className="slideshow-container">
        <FontAwesomeIcon icon={faChevronLeft} className="slideshow-fleche-gauche-1Imange " />
        <img src={images[0]} alt="Slide 0" className="slideshow-img" />
        <FontAwesomeIcon icon={faChevronRight}  className="slideshow-fleche-droite-1Imange " />
      </div>
    );
  }

  const slideNumber = `${currentIndex + 1}/${images.length}`;

  return (
    <div className="slideshow-container">
      <button onClick={goToPrevSlide} className="slideshow-fleche-gauche">
        <FontAwesomeIcon icon={faChevronLeft}  />
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slideshow-img" />
      <button onClick={goToNextSlide} className="slideshow-fleche-droite">
      <FontAwesomeIcon icon={faChevronRight}  />
      </button>

      <div className="slideshow-slide-number">{slideNumber}</div>
    </div>
  );
};

export default Slideshow;
