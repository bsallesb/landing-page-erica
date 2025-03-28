import React from 'react';
import { Content } from './Container.styles';

interface IContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<IContainerProps> = ({ children }) => (
  <Content>{children}</Content>
);

export default Container;
