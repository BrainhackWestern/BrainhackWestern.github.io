'use client';

import dynamic from 'next/dynamic';
import React from 'react';
const Obfuscate = dynamic(() => import('react-obfuscate'), { ssr: false })

const ObfuscateClient = ({ email }: { email: string }) => (
  <Obfuscate email={email}/>
);

export default ObfuscateClient;
