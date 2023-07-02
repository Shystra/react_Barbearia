import React from 'react';


import {  MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';
import BotaoVoltarAoTopo from '../../components/ButtonBackTop/ButtonBackTop';




const urlWhatsApp = 'https://api.whatsapp.com/send/?phone=5541999216613&text&type=phone_number&app_absent=0';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='servicos'>
    <div className='app__specialMenu-title'>
      {/* <SubHeading title="Menu that fits yo Pallet"/> */}
      <h1 className='headtext__cormorant'>Serviços</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_heading'>Degradê</p>
        <div className='app__specialMenu_menu_items'>
          
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
          ))}
        </div>
      </div>


      <div className='app__specialMenu-menu_img'>
            <img src={images.menu} alt='menu img'/>
      </div>

      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>Mensal</p>
        <div className='app__specialMenu_menu_items'>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          ))}
          
        </div>
      </div>

    </div>

       <div style={{marginTop: '15px'}}>
        <BotaoVoltarAoTopo/>
        <button type='button' className='custom__button'><a href={urlWhatsApp}>Agende Seu Horário</a></button>
       </div>
        

  </div>
);

export default SpecialMenu;
