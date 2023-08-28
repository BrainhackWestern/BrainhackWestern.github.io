import { MjmlTable, MjmlText } from '@faire/mjml-react';
import React from 'react';

export const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <MjmlTable
      fontFamily="Montserrat, Verdana, sans-serif"
      fontSize={16}
      color="#f9f9f9"
      cellpadding="10px"
    >
      {children}
    </MjmlTable>
  );
};
