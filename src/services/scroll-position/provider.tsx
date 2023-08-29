import { debounce } from 'lodash';
import { PropsWithChildren, useEffect, useState } from 'react';
import ScrollPositionContext from './context';
import useScrollPosition from './use';

function ScrollPositionProvider({ children }: PropsWithChildren<{}>) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const value = {
    state: { scrollPosition },
    actions: { setScrollPosition }
  };
  return (
    <ScrollPositionContext.Provider value={value}>
      <Responsive>{children}</Responsive>
    </ScrollPositionContext.Provider>
  );
}

export const Responsive = ({ children }: PropsWithChildren<{}>) => {
  const {
    actions: { setScrollPosition }
  } = useScrollPosition();

  const handleScroll = debounce(
    () => {
      setScrollPosition(document.documentElement.scrollTop);
    },
    100,
    { leading: true }
  );

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return <>{children}</>;
};

export default ScrollPositionProvider;
