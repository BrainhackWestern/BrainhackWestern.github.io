import React, { ReactNode } from 'react';
import { contentSpace } from './content.css';
import { Container } from 'react-bootstrap';

interface ContentProps {
  children: ReactNode;
  className?: string;
  id?: string
  fluid?: string | boolean
}

const Content = ({ children, className, id, fluid }: ContentProps) => (
  <Container fluid={fluid} id={id} className={`${contentSpace} ${className ?? ''}`}>{children}</Container>
);

export default Content;
