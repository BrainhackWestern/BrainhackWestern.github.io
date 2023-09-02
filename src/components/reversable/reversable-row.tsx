'use client'

import React, { ReactNode, useContext } from 'react';
import Row from '../layout/row';
import { ReversableContext } from './context';

const ReversableRow = ({ contents: data, className }: { className?: string, contents: ReactNode[]}) => {
  const { reversed } = useContext(ReversableContext)
  return (
    <Row className={`${className ?? ''} align-items-center justify-content-center`}>
      {reversed ? data.slice().reverse() : data}
    </Row>
  );
};

export default ReversableRow;
