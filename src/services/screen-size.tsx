'use client';

import { createContext, PropsWithChildren, useEffect, useState } from 'react';



const ScreenSizeContext = createContext(0)

const getScreenSize = () => {
  const w = window.innerWidth;
  if (w >= 1400) {
    return (5);
  } else if (w >= 1200) {
    return (4);
  } else if (w >= 992) {
    return (3);
  } else if (w >= 768) {
    return (2);
  } else if (w >= 578) {
    return (1);
  } else {
    return (0);
  }
};

const ScreenSizeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [screenSize, setScreenSize] = useState(0);

  const handleResize = () => {
    setScreenSize(getScreenSize())
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return function cleanup() {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      {children}
    </ScreenSizeContext.Provider>
  );
}

export const screenSizes = {
  xsm: 0,
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
  xxl: 5
};

export { ScreenSizeContext, ScreenSizeProvider };