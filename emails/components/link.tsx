import { MjmlText } from '@faire/mjml-react';
import React from 'react';

interface LinkProps {
  children?: React.ReactNode;
  href: string;
  fontSize?: number;
}

export const Link = ({ children, href, fontSize = 10 }: LinkProps) => {
  const text = children ?? href;
  return (
    <>
      <a href={href}>{text}</a>
      <br />
      {children ? <span style={{ fontSize }}>{href}</span> : null}
    </>
  );
};
