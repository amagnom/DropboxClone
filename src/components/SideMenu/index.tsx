import React, { useState, useEffect } from 'react';

import { Container } from './styles';

declare global {
  interface Window {
    toggleActiveMenu: (() => void) | undefined;
  }
}

const scrollThreshold = 300;

const SideMenu: React.FC = ({ children }) => {

  const [isActive, setIsActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);


  useEffect(() => {

    //a funcao onScroll usada abaixo
    function onScroll() {
      setScrollY(window.scrollY);
      setIsActive(false);
    }

    //adicionou no evento de scroll a funlçao onScroll
    window.addEventListener('scroll', onScroll);

    //quando termina, usa o window.remove para desfazer o que foi feito antes
    //e voltar ao normal
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollY]);



  //anota se o menu foi ativo por ser clicado coloca a classe open
   //caso contrario nao, isso é para colocar a opção de X ou não
  const classes = [
    isActive ? 'open' : '',
    scrollY <= scrollThreshold ? 'scrollOpen' : '',
  ];
  const className = classes.join(' ').trim();

  function toggleActiveMenu() {
    setIsActive((prev) => !prev);
  }

  window.toggleActiveMenu = toggleActiveMenu;

  return <Container className={className}>{children}</Container>;
};

export default SideMenu;