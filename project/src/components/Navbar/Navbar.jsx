import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { CgClose } from 'react-icons/cg';
import { SubHeading } from '../../components';
import {BsFacebook, BsInstagram, BsWhatsapp} from 'react-icons/bs'

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);  


const urlInstagram = "https://www.instagram.com/felipao.barbershop/";
const urlFacebook = '';
const urlWhatsApp = 'https://api.whatsapp.com/send/?phone=5541999216613&text&type=phone_number&app_absent=0';

return(
  <nav className='app__navbar'>
    <div className='app__navbar-logo '>
        <img src={images.gericht} alt='app logo'/>
    </div>
    <ul className='app__navbar-links'>
      
      <li className='p__cormorant'><a href='#inicio'>Inicio</a></li>
      <li className='p__cormorant'><a href='#servicos'>Serviços</a></li>
      <li className='p__cormorant'><a href="#galeria">Galeria</a></li>
      <li className='p__cormorant'><a href='#sobre'>Sobre</a></li>
      <li className='p__cormorant'><a href='#contato'>Contato</a></li>
     
    </ul>

    <div className='app__navbar-links_icons'>
      <a href={urlInstagram} target='_blank' rel='noopener'><BsInstagram/></a>
      {/* <a href={urlFacebook} target='_blank' rel='noopener'><BsFacebook/></a> */}
      <a href={urlWhatsApp} target='_blank' rel='noopener'><BsWhatsapp/></a>
      
    </div>
    
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu 
      color="#fff" 
      fontSize={27} 
      onClick={() => setToggleMenu(true)}/>

    {toggleMenu && (
    <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
      <CgClose 
      fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
       <ul className='app__navbar-smallscren_links'>
        <li className='p__cormorant'><a href='#inicio'  onClick={() => setToggleMenu(false)}>Inicio</a></li>
        <li className='p__cormorant'><a href='#servicos' onClick={() => setToggleMenu(false)}>Serviços</a></li>
        <li className='p__cormorant'><a href='#galeria' onClick={() => setToggleMenu(false)}>Galeria</a></li>
        <li className='p__cormorant'><a href='#sobre' onClick={() => setToggleMenu(false)}>Sobre</a></li>
        <li className='p__cormorant'><a href='#contato' onClick={() => setToggleMenu(false)}>Contato</a></li>
      </ul>
    </div>
    )}
    






    </div>
  </nav>
  ) 
};

export default Navbar;
