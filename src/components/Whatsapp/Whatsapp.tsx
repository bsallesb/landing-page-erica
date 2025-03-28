import React from 'react';

import { Label, Section, Wrapper, LabelContent } from './Whatsapp.styles';
import Button from '../Button/Button';
import whatsappBackground from '../../assets/images/whatsapp-bg.png';
import Container from '../Container/Container';
import { openWhatsApp } from '../../common';

const Whatsapp: React.FC = () => {
  const message =
    'Olá, gostaria de agendar uma consulta. Poderia me informar as datas disponíveis?';

  return (
    <Section image={whatsappBackground} id="whatsapp">
      <Container>
        <Wrapper>
          <LabelContent>
            <Label>Agende sua consulta pelo Whatsapp</Label>
          </LabelContent>
          <Button
            label="Agendar agora"
            border="rounded"
            color="success"
            onClick={() => openWhatsApp(5535999502248, message)}
            animated
            icon="whatsapp"
          />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Whatsapp;
