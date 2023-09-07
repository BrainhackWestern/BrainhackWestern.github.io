'use client';

import { debounce } from 'lodash';
import { createContext, PropsWithChildren, useEffect, useState } from 'react';

export const ScrollPositionContext = createContext(0);

export function ScrollPositionProvider({ children }: PropsWithChildren<{}>) {
  const initial = 0;
  const [scrollPosition, setScrollPosition] = useState(initial);

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

  return (
    <ScrollPositionContext.Provider value={scrollPosition}>
      {children}
    </ScrollPositionContext.Provider>
  );
}
