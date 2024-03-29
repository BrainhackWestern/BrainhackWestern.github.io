import { MjmlText } from '@faire/mjml-react';
import React from 'react';

export const Heading = ({ children, large }: { children: React.ReactNode, large?: boolean }) => {
  return (
    <MjmlText
      fontFamily="Quicksand, Verdana, sans-serif"
      fontSize={large ? 32 : 24}
      color="#0f0f0f"
      paddingBottom={50}
      align="center"
    >
      {children}
    </MjmlText>
  );
};
