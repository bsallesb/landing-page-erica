import React from 'react';

import { Action } from './Button.styles';
import { IconMap } from '../../assets/icons/Icons';

interface IButtonProps {
  label: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick: () => void;
  shadow?: boolean;
  border?: 'rounded' | 'pill';
  color?: 'primary' | 'success';
  animated?: boolean;
  icon?: string;
}

const Button: React.FC<IButtonProps> = ({
  label,
  type = 'button',
  shadow = false,
  border = 'pill',
  color = 'primary',
  onClick,
  animated = false,
  icon,
}) => {
  const IconTag = icon && IconMap[icon];

  return (
    <Action
      onClick={onClick}
      type={type}
      shadow={shadow}
      border={border}
      color={color}
      animated={animated}
    >
      {icon && IconTag}
      <span>{label.toUpperCase()}</span>
    </Action>
  );
};

export default Button;
