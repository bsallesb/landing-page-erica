import React from 'react';

import {
  Content,
  Label,
  Information,
  WebBox,
  MobileBox,
  Row,
} from './Agreement.styles';
import lutopaxLogo from '../../assets/images/lutopax-logo.png';
import medsulLogo from '../../assets/images/medsul-logo.png';
import Container from '../Container/Container';

const Agreement: React.FC = () => {
  return (
    <Content id="agreement">
      <Container>
        <WebBox>
          <Label>Convênios</Label>
          <img src={lutopaxLogo} alt="Logo da Lutopax" />
          <img src={medsulLogo} alt="Logo da Med Sul Saúde" />
          <Information>
            Não trabalho com convênios convencionais, tenho parceria onde
            ofereço descontos em alguns procedimentos.
          </Information>
        </WebBox>
        <MobileBox>
          <Label>Convênio</Label>
          <Row>
            <img src={lutopaxLogo} alt="Logo da Lutopax" />
            <img src={medsulLogo} alt="Logo da Med Sul Saúde" />
          </Row>
          <Information>
            Não trabalho com convênios convencionais, tenho parceria onde
            ofereço descontos em alguns procedimentos.
          </Information>
        </MobileBox>
      </Container>
    </Content>
  );
};

export default Agreement;
