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
      color="#0f0f0f"
      lineHeight="200%"
    >
      {children}
    </MjmlText>
  );
};
