import React from 'react';

import Container from '../Container/Container';
import { Content, Menu, Wrapper } from './Header.styles';
import darkLogo from '../../assets/images/logo-dark.png';
import Button from '../Button/Button';
import { openWhatsApp } from '../../common';
import List from '../List/List';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header: React.FC = () => {
  const message =
    'Olá, gostaria de agendar uma consulta. Poderia me informar as datas disponíveis?';

  const actions = [
    { label: 'SERVIÇOS', value: 'service', link: '#offering' },
    { label: 'CONVÊNIOS', value: 'insurance', link: '#agreement' },
    { label: 'SOBRE', value: 'about', link: '#bio-section' },
    { label: 'COMO CHEGAR', value: 'route', link: '#explore-section' },
    { label: 'DÚVIDAS', value: 'info', link: '#support' },
  ];

  return (
    <Wrapper>
      <Container>
        <Content>
          <AnchorLink href="#top-section" offset="100">
            <img src={darkLogo} alt="logo" />
          </AnchorLink>
          <Menu>
            {actions.map((action) => (
              <List key={action.value} name={action.label} link={action.link} />
            ))}
          </Menu>
          <Button
            label="Agendar consulta"
            onClick={() => openWhatsApp(5535999502248, message)}
            icon="whatsapp"
          />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Header;
