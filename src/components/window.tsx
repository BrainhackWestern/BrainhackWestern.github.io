import React, { PropsWithChildren } from 'react';
import { window } from './window.css';

const Window = ({ children, half }: PropsWithChildren<{ half?: boolean }>) => (
  <div className={window} style={{ height: half ? '50vh' : '100vh' }}>
    {children}
  </div>
);

export default Window;
