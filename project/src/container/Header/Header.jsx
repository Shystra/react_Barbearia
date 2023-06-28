import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The Your Better Experience Is Here</h1>
      <p className='p__opensans' style={{ margin: '1rem 0'}}>Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico.</p>
      <button type="button" className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>


    </div>
  </div>

  
  
);

export default Header;
