'use client'

import { debounce } from 'lodash';
import { PropsWithChildren, useContext, useEffect, useState } from 'react';
import ScrollPositionContext from './context';

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
  } = useContext(ScrollPositionContext)

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

  return children;
};

export default ScrollPositionProvider;
