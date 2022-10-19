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
    if (current) {
      loadingInterval.current = window.setInterval(() => {
        current.innerHTML += '.';
      }, interval ?? 1000);
    } else {
      window.clearInterval(loadingInterval.current);
    }
  });

  return (
    <span className={className}>
      {prefix}
      <span ref={loader}>.</span>
    </span>
  );
};
