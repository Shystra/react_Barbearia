import React, { useEffect, useState } from 'react';


import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';
import ImageComponent from './ImageComponent';

const Header = () => {
  const [phrases, setPhrases] = useState(['"Corte, Estilo & Confiança..."', '"Tudo em um só Lugar!"']);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
    <div className='app__wrapper_img'>   
      <ImageComponent/>
      {/* <img src={images.welcome} alt='header img'/> */}


    </div>

  </div>
  )
  
  
};

export default Header;
