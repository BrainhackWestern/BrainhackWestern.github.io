'use client';

import { isArray, isString, isUndefined } from 'lodash';
import React, { CSSProperties, PropsWithChildren, useContext } from 'react';
import { ReversableContext } from './context';

type ReversableVariants<T> = [T, T];
interface ReversableHeaderProps {
  className?: string | ReversableVariants<string>;
  style?: CSSProperties | ReversableVariants<CSSProperties>;
}

const ReversableHeader = ({
  children,
  className,
  style
}: PropsWithChildren<ReversableHeaderProps>) => {
  const { reversed } = useContext(ReversableContext);

  return (
    <div
      className="d-flex"
      style={{ justifyContent: reversed ? 'flex-end' : 'flex-start' }}
    >
      <h3
        className={
          isString(className)
            ? className
            : !isUndefined(className)
            ? className[reversed ? 1 : 0]
            : className
        }
        style={isArray(style) ? style[reversed ? 1 : 0] : style}
      >
        {children}
      </h3>
    </div>
  );
};

export default ReversableHeader;
