import React from 'react';

import Container from '../Container/Container';
import { Section, HelpBox, Wrapper } from './Support.styles';
import Title from '../Title/Title';
import Collapse from '../Collapse/Collapse';
import { supportData } from '../../constants/support';

const Support: React.FC = () => {
  return (
    <Wrapper id="support">
      <Section>
        <Container>
          <Title isTextWhite>Dúvidas Frequentes</Title>
          <HelpBox>
            {supportData.map((question) => (
              <Collapse
                key={question.id}
                title={question.title}
                description={question.description}
                message={question.automaticMessage}
              />
            ))}
          </HelpBox>
        </Container>
      </Section>
    </Wrapper>
  );
};

export default Support;
