import React, { CSSProperties, PropsWithChildren } from 'react';
import * as styles from './article.css';
import Container from './layout/container';

const Article = ({
  children,
  style
}: PropsWithChildren<{ style?: CSSProperties }>) => (
  <Container fluid="lg" as="article" style={style} className={styles.article}>
    {children}
  </Container>
);

export default Article;
