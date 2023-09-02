'use client';

import { createContext, Dispatch, SetStateAction } from 'react';

export interface ScrollPositionContextType {
  state: {
    scrollPosition: number;
  };
  actions: {
    setScrollPosition: Dispatch<SetStateAction<number>>;
  };
}


const ScrollPositionContext = createContext<ScrollPositionContextType>({
  state: { scrollPosition: 0 },
  actions: { setScrollPosition: () => (val: number) => null }
});

export default ScrollPositionContext;
