import React, {useState, useEffect} from "react";

import './ButtonBackTop.css';

const BotaoVoltarAoTopo = () => {
    const [mostrarBotao, setMostrarBotao] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setMostrarBotao(true);
        } else {
          setMostrarBotao(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <button
        className={`botao-voltar-ao-topo ${mostrarBotao ? 'mostrar' : ''}`}
        onClick={handleClick}
        title="Voltar ao topo"
      >
        &#8593;
      </button>
    );
  };
  
  export default BotaoVoltarAoTopo;