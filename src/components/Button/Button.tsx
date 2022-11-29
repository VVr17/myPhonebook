import React, { MouseEventHandler } from 'react';
import { ButtonStyled } from './Button.styled';

interface IProps {
  type?: 'button' | 'submit' | 'reset';
  name?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const Button: React.FC<IProps> = ({
  type = 'button',
  name,
  onClick,
  children,
  disabled = false,
}) => {
  return (
    <ButtonStyled type={type} name={name} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};
