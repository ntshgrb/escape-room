import React from 'react';
import * as S from './button.styled';

type ButtonProps = {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button = ({ children, ...props }: ButtonProps) => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
