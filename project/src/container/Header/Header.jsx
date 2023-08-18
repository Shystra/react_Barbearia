import React, { useEffect, useState } from 'react';
import { images } from '../../constants';
import './Header.css';
import Carousel from 'react-multi-carousel';


const Header = () => {
  const [phrases, setPhrases] = useState(['"Corte, Estilo & Confiança..."', '"Tudo em um só Lugar!"']);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);


  const galleryImages = [images.gallery01, images.gallery02, ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  // SCROLL IMAGE
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 2000); // Tempo de duração da animação de apagar (em milissegundos)
    }, 5000); // Tempo de exibição de cada frase (em milissegundos)

    return () => clearInterval(interval);
  }, [phrases]);

  return  (
    // app__bg
  <div className='app__header app__wrapper section__padding' id='inicio'>
    <div className='app__wrapper_info'>
      <div className='app__wrapper_img'>
    {/* <img src={images.welcome} alt='testing_header'/> */}
    </div>
      {/* <SubHeading title="Chase the new flavour"/> */}
      <h1 className='app__header-h1 headtext__cormorant '>
        {phrases[currentPhraseIndex].split('').map((word, index) => (
          <span key={index} className={isAnimating ? 'fade-out' : ''}>
            {word}
          </span>
        ))}
      </h1>
      <p className='p__opensans' style={{ margin: '1rem 0'}}></p>
      <button type="button" className="custom__button"><a href='#servicos'>Explore o Menu</a></button>

      
    </div>

    <div className='app__gallery_header'> 
    {/* <div className='testing'> */}
        <div className='app__gallery_images_container'>
          {galleryImages.map((image, index) => (
            <div className='app__gallery_images_card_header' key={`gallery_image-${ index + 1 }`}>
              <img src={image} alt='gallery'/>
              </div>
          ))}
        </div>
        </div>
    </div>

  // </div>
  )
  
  
};

export default Header;
