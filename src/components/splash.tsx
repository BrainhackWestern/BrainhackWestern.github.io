import React, { ReactNode } from 'react';
import * as styles from './splash.css';

const Splash = ({ children }: { children: ReactNode }) => (
  <div className={styles.splash}>{children}</div>
);

export default Splash;
