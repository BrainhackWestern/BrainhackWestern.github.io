import { MjmlButton, MjmlText } from '@faire/mjml-react';
import React from 'react';
import { Paragraph } from './paragraph';

export const Button = ({
  children,
  href
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <>
      <MjmlButton
        backgroundColor="#9f30ff"
        fontSize={24}
        fontFamily="Montserrat, Verdana, sans-serif"
        href={href}
      >
        {children}
      </MjmlButton>
      <Paragraph small>
        Or paste this url into your browser:
        <br />
        {href}
      </Paragraph>
    </>
  );
};
