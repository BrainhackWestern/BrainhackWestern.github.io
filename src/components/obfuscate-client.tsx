'use client';

import React from 'react';
import Obfuscate from 'react-obfuscate';

const ObfuscateClient = ({ email }: { email: string }) => (
  <Obfuscate email={email} />
);

export default ObfuscateClient;
