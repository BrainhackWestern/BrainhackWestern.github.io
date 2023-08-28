import { MjmlText } from '@faire/mjml-react';
import React from 'react';

export const Paragraph = ({
  children,
  small = false
}: {
  children: React.ReactNode;
  small?: boolean;
}) => {
  return (
    <MjmlText
      fontFamily="Montserrat, Verdana, sans-serif"
      fontSize={small ? 11 : 16}
      color="#f9f9f9"
      lineHeight="200%"
    >
      {children}
    </MjmlText>
  );
};
