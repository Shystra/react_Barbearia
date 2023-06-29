import React, { useEffect, useState } from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  const [phrases, setPhrases] = useState(['"Corte, estilo e confiança..."', '"tudo em um só lugar!"']);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
    
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      {/* <SubHeading title="Chase the new flavour"/> */}
      <h1 className='app__header-h1'>
        {phrases[currentPhraseIndex].split('').map((word, index) => (
          <span key={index} className={isAnimating ? 'fade-out' : ''}>
            {word}
          </span>
        ))}
      </h1>
      <p className='p__opensans' style={{ margin: '1rem 0'}}></p>
      <button type="button" className="custom__button" >Explore o Menu</button>

      
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>


    </div>

  </div>
  )
  
  
};

export default Header;
