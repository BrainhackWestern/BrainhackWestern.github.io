'use client';

import { PropsWithChildren, useContext } from 'react';
import { ScreenSizeContext, screenSizes } from '../../services/screen-size';
import { ReversableContext } from './context';
import ReversableHeader from './reversable-header';
import ReversableRow from './reversable-row';

const Reversable = ({
  children,
  reversed = false,
  minSize
}: PropsWithChildren<{
  reversed?: boolean;
  minSize?: keyof typeof screenSizes;
}>) => {
  const screenSize = useContext(ScreenSizeContext);
  const aboveCutoff = minSize ? screenSize >= screenSizes[minSize] : true;
  return (
    <ReversableContext.Provider value={{ reversed: reversed && aboveCutoff }}>
      {children}
    </ReversableContext.Provider>
  );
};

Reversable.Header = ReversableHeader;
Reversable.Content = ReversableRow;
export default Reversable;
