import React, { PropsWithChildren, CSSProperties } from "react";
import * as styles from "./article.css"
import { Container } from "react-bootstrap";

const Article = ({ children, style }: PropsWithChildren<{ style?: CSSProperties}>) => (
  <Container fluid="lg" as="article" style={style} className={styles.article}>{children}</Container>
)

export default Article;