import React from 'react';

import {
  Paragraph,
  Wrapper,
  Image,
  Content,
  Icon,
  TopSection,
} from './BioSection.styles';
import Container from '../Container/Container';
import Title from '../Title/Title';
import bioPicture from '../../assets/images/bio-picture.png';
import { IconMap } from '../../assets/icons/Icons';

const BioSection: React.FC = () => {
  return (
    <Wrapper id="bio-section">
      <Container>
        <Content>
          <TopSection>
            <Title>Quem é a Dra. Érica Sales?</Title>
            <Icon
              href="https://www.instagram.com/draericasales"
              target="_blank"
            >
              {IconMap.instagram}
            </Icon>
          </TopSection>
          <Paragraph>
            Sou Cirurgiã-Dentista com um profundo amor pela reabilitação oral,
            dedicada a oferecer a você mais do que apenas saúde bucal. Meu
            objetivo é ajudá-lo a recuperar o sorriso dos seus sonhos, unindo
            estética e funcionalidade para que você se sinta bem consigo mesmo,
            tanto por dentro quanto por fora. Com especialização em Prótese e
            Odontologia Estética, ofereço um atendimento personalizado, contando
            com uma equipe de profissionais qualificados para garantir um
            tratamento completo, seguro e de alta qualidade. Meu consultório,
            localizado em Varginha/MG, está de portas abertas para acolhê-lo e
            cuidar de você da melhor maneira possível.
          </Paragraph>
        </Content>
        <Image src={bioPicture} alt="Fotografia da Dra. Érica Sales" />
      </Container>
    </Wrapper>
  );
};

export default BioSection;
