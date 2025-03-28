import React from 'react';

import Container from '../Container/Container';
import { Content, References, Wrapper, Icon } from './Footer.styles';
import logoFooter from '../../assets/images/logo-footer.png';
import { IconMap } from '../../assets/icons/Icons';
import { openGoogleMaps, openWaze, openWhatsApp } from '../../common';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer: React.FC = () => {
  const message = 'Olá, Dra. Érica, gostaria de agendar uma consulta...';

  return (
    <Wrapper>
      <Container>
        <Content>
          <AnchorLink href="#top-section" offset="100">
            <img src={logoFooter} alt="logo" />
          </AnchorLink>
          <span>Dra. Érica Sales 2025 - Todos os direitos reservados ©</span>
          <Icon>
            <a
              href="https://www.instagram.com/draericasales"
              target="_blank"
              rel="noreferrer"
            >
              {IconMap.instagram}
            </a>
            <div onClick={() => openWhatsApp(5535999502248, message)}>
              {IconMap.whatsapp}
            </div>
            <a href={openGoogleMaps()} target="_blank" rel="noreferrer">
              {IconMap.map}
            </a>
            <a href={openWaze()} target="_blank" rel="noreferrer">
              {IconMap.waze}
            </a>
          </Icon>
        </Content>
        <References>
          <p>Dra. Érica Sales 2025 - Todos os direitos reservados ©</p>
          <span>
            Design by
            <a
              href="https://beacons.ai/luisgoulart"
              target="_blank"
              rel="noreferrer"
            >
              Luís Goulart
            </a>
            | Developed by
            <a
              href="https://www.linkedin.com/in/brenosales/"
              target="_blank"
              rel="noreferrer"
            >
              Breno Sales
            </a>
          </span>
        </References>
      </Container>
    </Wrapper>
  );
};

export default Footer;
