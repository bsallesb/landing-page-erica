import React from 'react';

import Container from '../Container/Container';
import backgroundPrimary from '../../assets/images/background-primary.png';
import mobileImage from '../../assets/images/background-mobile.png';
import topPicture from '../../assets/images/top-picture.png';
import {
  RelativeContent,
  Box,
  Content,
  Section,
  Paragraph,
  Span,
} from './TopSection.styles';
import Button from '../Button/Button';
import { openWhatsApp } from '../../common';

const TopSection: React.FC = () => {
  const message =
    'Olá, gostaria de agendar uma avaliação. Poderia me informar as datas disponíveis?';

  return (
    <Section
      $image={backgroundPrimary}
      $mobileImage={mobileImage}
      id="top-section"
    >
      <Container>
        <RelativeContent>
          <Content>
            <Box>
              <Paragraph>
                Sorrir com <span>confiança</span> torna a{' '}
                <span>vida melhor!</span>
              </Paragraph>
              <Span>
                Cuide da sua <b>saúde bucal</b> com quem entende do assunto,{' '}
                <b>especialista</b> em cuidar e <b>transformar sorrisos!</b>
              </Span>
            </Box>
            <Button
              label="Quero agendar uma avaliação"
              shadow
              onClick={() => openWhatsApp(5535999502248, message)}
              animated
              icon="chevronRight"
            />
          </Content>
          <img src={topPicture} alt="Fotografia da Dra. Érica Sales" />
        </RelativeContent>
      </Container>
    </Section>
  );
};

export default TopSection;
