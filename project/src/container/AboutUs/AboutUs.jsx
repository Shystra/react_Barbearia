import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
        {/* <img src={images.G} alt='g letter'/> */}
    </div>
    
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about flex__center'>
        <h1 className='headtext__cormorant'>About Us</h1>
        {/* <img src={images.spoon} alt='about_spoon' className='spoon__img'/> */}
          <p className='p__opensans' >O trecho padrão original de Lorem Ipsum, usado desde o século XVI, está reproduzido abaixo para os interessados</p>
          <button type="button" className="custom__button" >Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'></div>
        <img src={images.knife} alt='about_knife'/>



        <div className='app__aboutus-content_history flex__center'>
          <h1 className='headtext__cormorant'>Our History</h1>
          {/* <img src={images.spoon} alt='about_spoon' className='spoon__img'/> */}
            <p className='p__opensans'>O trecho padrão original de Lorem Ipsum, usado desde o século XVI, está reproduzido abaixo para os interessados</p>
            <button type="button" className="custom__button" >Know More</button>
          </div>

    </div>
  </div>
);

export default AboutUs;
