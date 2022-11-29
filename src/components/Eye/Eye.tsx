import React from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { IconWrapper } from './Eye.styled';

interface IProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  isVisible: boolean;
}

export const Eye: React.FC<IProps> = ({ onClick, isVisible }) => (
  <IconWrapper onClick={onClick}>
    {isVisible ? <FaEye /> : <FaEyeSlash />}
  </IconWrapper>
);
