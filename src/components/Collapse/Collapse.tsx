import React, { useState } from 'react';

import {
  Content,
  Paragraph,
  Wrapper,
  Icon,
  Button,
  BottomSection,
  Label,
} from './Collapse.styles';
import { IconMap } from '../../assets/icons/Icons';
import { openWhatsApp } from '../../common';

interface CollapseProps {
  title: string;
  description: string;
  message: string;
}

const Collapse: React.FC<CollapseProps> = ({ title, description, message }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper isOpen={isOpen}>
      <Content onClick={() => setIsOpen(!isOpen)}>
        <Icon isOpen={isOpen}>{IconMap.plus}</Icon>
        <span>{title}</span>
      </Content>
      {isOpen && (
        <Paragraph>
          <p>{description}</p>
          <BottomSection>
            <Button onClick={() => openWhatsApp(5535999502248, message)}>
              {IconMap.whatsapp}
              <Label>Falar com a Dra sobre o assunto</Label>
            </Button>
          </BottomSection>
        </Paragraph>
      )}
    </Wrapper>
  );
};

export default Collapse;
