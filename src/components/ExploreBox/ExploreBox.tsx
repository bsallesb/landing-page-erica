import React from 'react';

import { Wrapper } from './ExploreBox.styles';
import Title from '../Title/Title';

interface ExploreBoxProps {
  title: string;
  children: React.ReactNode;
}

const ExploreBox: React.FC<ExploreBoxProps> = ({ title, children }) => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

export default ExploreBox;
