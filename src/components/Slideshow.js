import"../styles/index.css"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight , faChevronLeft } from '@fortawesome/free-solid-svg-icons';



class Slideshow extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentIndex: 0
      };
    }
  
    goToPrevSlide = () => {
      const { currentIndex } = this.state;
      const { images } = this.props;
      const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      this.setState({
        currentIndex: newIndex
      });
    }
  
    goToNextSlide = () => {
      const { currentIndex } = this.state;
      const { images } = this.props;
      const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      this.setState({
        currentIndex: newIndex
      });
    }
  
    render() {
      const { currentIndex } = this.state;
      const { images } = this.props;
  
      return (
        <div className="slideshow-container">
          <button onClick={this.goToPrevSlide} className="slideshow-fleche-gauche"><FontAwesomeIcon icon={faChevronLeft} /></button>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slideshow-img" />
          <button onClick={this.goToNextSlide} className="slideshow-fleche-droite"><FontAwesomeIcon icon={ faChevronRight } /></button>
          
        </div>
      );
    }
  }
  
  export default Slideshow;