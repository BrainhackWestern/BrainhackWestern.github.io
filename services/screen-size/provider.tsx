import { PropsWithChildren, useState } from 'react';
import ScreenSizeContext from './context';


function ScreenSizeProvider({ children }: PropsWithChildren<{}>) {
    const [largeScreen, setLargeScreen] = useState(false);
    const value = {
        state: { largeScreen },
        actions: { setLargeScreen }
    };
    return (
        <ScreenSizeContext.Provider value={value}>
            {children}
        </ScreenSizeContext.Provider>
    )
}

export default ScreenSizeProvider