'use client'

import { PropsWithChildren, useEffect, useState } from 'react';
import ScreenSizeContext from './context';
import useScreenSize from './use';

function ScreenSizeProvider({ children }: PropsWithChildren<{}>) {
  const [screenSize, setScreenSize] = useState(0);
  const value = {
    state: { screenSize },
    actions: { setScreenSize }
  };
  return (
    <ScreenSizeContext.Provider value={value}>
      <Responsive>{children}</Responsive>
    </ScreenSizeContext.Provider>
  );
}

export const Responsive = ({ children }: PropsWithChildren<{}>) => {
  const {
    actions: { setScreenSize }
  } = useScreenSize();

  const handleResize = () => {
    const w = window.innerWidth;
    if (w >= 1400) {
      setScreenSize(5);
    } else if (w >= 1200) {
      setScreenSize(4);
    } else if (w >= 992) {
      setScreenSize(3);
    } else if (w >= 768) {
      setScreenSize(2);
    } else if (w >= 578) {
      setScreenSize(1);
    } else {
      setScreenSize(0);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return function cleanup() {
      window.removeEventListener('resize', handleResize);
    };
  });

  return <>{children}</>;
};

export default ScreenSizeProvider;
