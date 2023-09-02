import { PropsWithChildren } from 'react';
import { ReversableContext } from './context';
import ReversableHeader from './reversable-header';
import ReversableRow from './reversable-row';

const Reversable = ({
  children,
  reversed
}: PropsWithChildren<{ reversed: boolean }>) => {
  return (
    <ReversableContext.Provider value={{ reversed }}>
      {children}
    </ReversableContext.Provider>
  );
};

Reversable.Header = ReversableHeader;
Reversable.Content = ReversableRow;
export default Reversable;
