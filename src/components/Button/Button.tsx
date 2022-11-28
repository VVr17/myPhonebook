import React, { MouseEventHandler } from 'react';
import { ButtonStyled } from './Button.styled';

interface IProps {
  type?: 'button' | 'submit' | 'reset';
  name?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

export const Button: React.FC<IProps> = ({
  type = 'button',
  name,
  onClick,
  children,
}) => {
  return (
    <ButtonStyled type={type} name={name} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
