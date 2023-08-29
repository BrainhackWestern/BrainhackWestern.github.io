import { createContext, Dispatch, SetStateAction } from 'react';

export interface ScrollPositionProviderType {
  state: {
    scrollPosition: number;
  };
  actions: {
    setScrollPosition: Dispatch<SetStateAction<number>>;
  };
}

export type ScrollPositionContextType = ScrollPositionProviderType | undefined;

const ScrollPositionContext =
  createContext<ScrollPositionContextType>(undefined);

export default ScrollPositionContext;
