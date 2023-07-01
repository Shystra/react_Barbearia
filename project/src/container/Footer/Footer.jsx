import React from 'react';
import { FooterOverlay, Newsletter} from '../../components';
import {BsWhatsapp, BsInstagram, BsFacebook} from 'react-icons/bs'

import './Footer.css';
import { images } from '../../constants';

const Footer = () => {
  const urlInstagram = 'https://www.instagram.com/felipao.barbershop/';
  const urlFacebook = '';
  const urlWhatsApp = 'https://api.whatsapp.com/send/?phone=5541999216613&text&type=phone_number&app_absent=0';



  return(
  <div className='app__footer  section__padding'>
    {/* <FooterOverlay/>
    <Newsletter/> */}

    <div className='app__footer-links' id='contato'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contato</h1>
        <p className='p__opensans'>+55 41 9921-6613</p>
        <p className='p__opensans'>+55 41 9954-9487</p>
        <p className='p__opensans'>+55 41 8783-0778</p>

      </div>
      
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='footer_logo'/>
        <p className='p__opensans'>Aqui, a tradição encontra a modernidade para um corte perfeito.</p>
          {/* <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop: 15}}/> */}
      <div className='app__footer-links_icons'>
       <a href={urlInstagram} target='_blank' rel='noopener'><BsInstagram/></a>
       <a href={urlWhatsApp} target='_blank' rel='noopener'><BsWhatsapp/></a>

      </div>
      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Horários</h1>
        <p className='p__opensans'>Segunda à Sexta</p>
        <p className='p__opensans'>09:00 às 19:00</p>
        <p className='p__opensans'>Sábado</p>
        <p className='p__opensans'>09:00 às 17:00</p>
      </div>
    </div>
    <div className='footer__copyright'></div>
        <p className='p__opensans'>@2023 Felipao. All Rights Reserved.</p>
  </div>
)};

export default Footer;
