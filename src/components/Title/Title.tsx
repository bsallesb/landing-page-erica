import React from 'react';

import { Label } from './Title.styles';

interface ITitleProps {
  children: React.ReactNode;
  isTextWhite?: boolean;
}

const Title: React.FC<ITitleProps> = ({ children, isTextWhite = false }) => {
  return <Label isTextWhite={isTextWhite}>{children}</Label>;
};

export default Title;
