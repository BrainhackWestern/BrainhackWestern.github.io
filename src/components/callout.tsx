import React, { ReactNode } from 'react';
import Container from './layout/container';
import * as styles from './callout.css';

const Callout = ({ children }: { children: ReactNode }) => (
  <div className={styles.backCard}>
    <div className={styles.frontCard}>
      <Container fluid="lg">{children}</Container>
    </div>
  </div>
);

export default Callout;
