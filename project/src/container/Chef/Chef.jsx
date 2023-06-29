import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse' >
    <img src={images.chef} alt='chef'/>
  </div>

  <div className='app__wrapper_info'>
    <SubHeading title='Is here'/>
    <h1 className='headtext__cormorant'>Uma provável galeria</h1>

    <div className='app__chef-content'>
      <div className='app__chef-content_quote'>
        <img src={images.quote} alt='quote'/>
        <p className='p__opensans'>testging lorem testgin fdsjma fkahw</p>

      </div>
      <p className='p__opensans'>laiwe author amfie sdk</p>

    </div>

      {/* <div className='app__chef-sign'></div> */}

      

  </div>
  </div>
  
);

export default Chef;
