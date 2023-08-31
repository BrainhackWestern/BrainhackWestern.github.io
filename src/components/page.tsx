import React, { ReactNode } from 'react';
import { ExpandedConfig } from '../interfaces/site-config';
import Footer, { getFooterProps } from './footer';
import { NavBar } from './navbar';
import * as styles from './page.css';
import { RegisterButton } from './register-button';
import Head from 'next/head';

interface DocumentProps {
  config: ExpandedConfig;
  children: ReactNode;
  title: string;
  description: string;
  splash?: boolean;
  registrationButton?: boolean;
}
const Page = ({
  config,
  children,
  title,
  description,
  splash = false,
  registrationButton = false
}: DocumentProps) => (
  <div className={styles.page}>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <NavBar
      displaySections={config.displaySections}
      splashMode={splash}
      registrationButton={
        registrationButton && config.registration.status === 'open' ? (
          <RegisterButton settings={config.registration} />
        ) : null
      }
    />
    {children}
    <Footer {...getFooterProps(config)} />
  </div>
);

export default Page;
