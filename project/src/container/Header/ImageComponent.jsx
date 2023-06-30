import { useState, useEffect } from 'react';
import { images } from '../../constants';
import './Header.css';


const ImageComponent = () => {
    const [shouldAnimate, setShouldAnimate] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const element = document.querySelector('.app__wrapper_img');
        if (element) {
          const elementTop = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (elementTop < windowHeight * 0.9) {
            setShouldAnimate(true);
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <img
        className={`app__wrapper_img ${shouldAnimate ? 'slideInLeft' : ''}`}
        src={images.welcome}
        alt="header img"
      />
    );
  };

  export default ImageComponent;