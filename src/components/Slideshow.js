import "../styles/index.css";
import React from 'react';


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
        <div className="slideshow">
          <button onClick={this.goToPrevSlide}>Précédent</button>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
          <button onClick={this.goToNextSlide}>Suivant</button>
        </div>
      );
    }
  }
  
  export default Slideshow;