import { ReactComponentElement, ReactNode } from 'react';

declare module 'react-obfuscate' {
  const Obfuscate: (props?: {
    element?: string;
    children?: ReactNode;
    tel?: string;
    sms?: string;
    facetime?: string;
    email?: string;
    href?: string;
    headers?: object;
    obfuscate?: boolean;
    obfuscateChildren?: boolean;
    linkText?: string;
    style?: CSSStyleRule;
    onClick?: (Event) => void;
  }) => ReactNode;
  export default Obfuscate;
}
