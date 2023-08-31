import React, { CSSProperties, PropsWithChildren } from 'react';
import { Container } from 'react-bootstrap';
import * as styles from './article.css';

const Article = ({
  children,
  style
}: PropsWithChildren<{ style?: CSSProperties }>) => (
  <Container fluid="lg" as="article" style={style} className={styles.article}>
    {children}
  </Container>
);

export default Article;
