import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';



const urlWhatsApp = 'https://api.whatsapp.com/send/?phone=5541999216613&text&type=phone_number&app_absent=0';

const AboutUs = () => (
  <div className='app__aboutus flex__center section__padding' id='sobre'>
    <div className='app__aboutus-overlay flex__center'>
        
    </div>
    
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about flex__center'>
        <h1 className='headtext__cormorant'>Sobre Nós</h1>
        {/* <img src={images.spoon} alt='about_spoon' className='spoon__img'/> */}
          <p className='p__opensans' >Somos uma barbearia que se 
        preocupa com o estilo e a satisfação dos nossos clientes.  Oferecemos serviços de qualidade, 
        profissionais experientes e um ambiente agradável.</p>
          {/* <button type="button" className="custom__button" >Know More</button> */}
      </div>

      <div className='app__aboutus-content_knife flex__center'></div>
        <img src={images.knife} alt='about_knife'/>



        <div className='app__aboutus-content_history flex__center'>
          <h1 className='headtext__cormorant'>Nossa História</h1>
          {/* <img src={images.spoon} alt='about_spoon' className='spoon__img'/> */}
            <p className='p__opensans'>
            Bem-vindo à nossa barbearia, onde o sonho de algo grande se tornou uma realidade. 
            Nossa jornada começou há alguns anos, quando nós resolvemos um sonho: 
            proporcionar aos clientes uma experiência de barbearia excepcional.
            No início, cortávamos cabelo nas casas das pessoas, levando nossa paixão e 
            habilidade para além dos limites tradicionais de um salão de barbear. Com cada visita, 
            construímos relacionamentos e ganhamos a confiança daqueles que nos 
            permitiram cuidar de seus cabelos e estilos pessoais.
            </p>
            <br></br>
            <button type="button" className="custom__button" ><a href={urlWhatsApp}>Saiba Mais</a></button>
          </div>

    </div>
  </div>
);

export default AboutUs;
