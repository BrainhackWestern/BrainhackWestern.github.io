import { createContext, Dispatch, SetStateAction } from 'react';

export interface ScreenSizeProviderType {
  state: {
    screenSize: number;
  };
  actions: {
    setScreenSize: Dispatch<SetStateAction<number>>;
  };
}

export type ScreenSizeContextType = ScreenSizeProviderType | undefined;

const ScreenSizeContext = createContext<ScreenSizeContextType>(undefined);

export default ScreenSizeContext;
