import React from 'react';

import {
  Container,
  HeaderWrapper,
  Header,
  DropboxLogo,
  Content,
} from './styles';

interface Props {
  variant: 'blue' | 'beige' | 'white' | 'black';
  title: string;
  description: string;
}

const Section: React.FC<Props> = ({ variant, title, description }) => {
  const buttonVariant = Math.round(Math.random());

  function handleToggle() {
    //vaia ativar o menu
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
      //container que cobre tudo
      //wrapper que fica em volta
      //header a parte de cima

      //colocou no botao a funcao handleToggle para abrir o menu
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo />
            <span>Dropbox</span>
          </h1>

          <button onClick={handleToggle}>
            {buttonVariant === 0 ? 'Interagir' : 'Acessar'}
          </button>
        </Header>
      </HeaderWrapper>

      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  );
};

export default Section;