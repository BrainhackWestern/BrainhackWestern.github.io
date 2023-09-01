'use client'

import { MutableRefObject, useEffect, useRef } from 'react';

interface LoadingProps {
  className?: string;
  interval?: number;
  prefix?: string;
}

export const Loading = ({ interval, className, prefix }: LoadingProps) => {
  const loader: MutableRefObject<null | HTMLSpanElement> = useRef(null);
  const loadingInterval = useRef(0);

  useEffect(() => {
    const current = loader.current;
    const glyphs = [
      '&nbsp;&nbsp;&nbsp;',
      '.&nbsp;&nbsp;',
      '..&nbsp;',
      '...',
      '&nbsp;..',
      '&nbsp;&nbsp;.'
    ];
    let i = 0;
    if (current) {
      loadingInterval.current = window.setInterval(() => {
        i++;
        current.innerHTML = (prefix ?? '') + glyphs[i % glyphs.length];
      }, interval ?? 300);
    } else {
      window.clearInterval(loadingInterval.current);
    }
  });

  return (
    <span className={className}>
      <span ref={loader}></span>
    </span>
  );
};
