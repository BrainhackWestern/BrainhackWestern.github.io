import { createContext, Dispatch, SetStateAction } from 'react';

export interface ScreenSizeProviderType {
    state: {
        largeScreen: boolean;
    }
    actions: {
        setLargeScreen: Dispatch<SetStateAction<boolean>> 
    }
}

export type ScreenSizeContextType = ScreenSizeProviderType | undefined

const ScreenSizeContext = createContext<ScreenSizeContextType>(undefined);

export default ScreenSizeContext