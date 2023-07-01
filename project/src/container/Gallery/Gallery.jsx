import React from 'react';
import { BsInstagram, BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';


const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  const urlInstagram = 'https://www.instagram.com/felipao.barbershop/'
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const {current} = scrollRef;

    if(direction === 'left'){
      current.scrollLeft -= 1000; 
    }else{
      current.scrollLeft += 1000;
    }
  }
  

  return (
    <div className='app__gallery flex__center' id='galeria'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram"/>
        <h1 className='headtext__cormorant'>Fotos Galeria</h1>

        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2' }}>Lorem ipsun text</p>
        <button type='button' className='custom__button'>Ver Mais</button>
      </div>
      
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${ index + 1 }`}>
              <img src={image} alt='gallery'/><a className='gallery__image-icon' href={urlInstagram} target='_blank' rel='noopener'><BsInstagram/></a>
              {/* <BsInstagram className='gallery__image-icon'/> */}

            </div>
          ))}

              {/* <a href={urlInstagram} target='_blank' rel='noopener'><BsInstagram/></a> */}


        
        </div>
          <div className='app__gallery-images_arrow'>
            <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
            <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />

          </div>


      </div>
    </div>

  );


}

export default Gallery;
