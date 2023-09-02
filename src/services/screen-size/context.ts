'use client'

import { createContext, Dispatch, SetStateAction } from 'react';

export interface ScreenSizeContextType {
  state: {
    screenSize: number;
  };
  actions: {
    setScreenSize: Dispatch<SetStateAction<number>>;
  };
}


const ScreenSizeContext = createContext<ScreenSizeContextType>({
  state: { screenSize: 0 },
  actions: { setScreenSize: () => (val: number) => null }
});

export default ScreenSizeContext;
