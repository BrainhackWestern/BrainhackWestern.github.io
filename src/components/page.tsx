import React, { ReactNode } from 'react';
import { SiteConfig } from '../interfaces/site-config';
import Footer, { getFooterProps } from './footer';
import { NavBar } from './navbar';
import * as styles from './page.css';
import { RegisterButton } from './register-button';
import { getCurrentProjectURL, getRegistrationStatus } from '../lib/data';

interface DocumentProps {
  config: SiteConfig;
  children: ReactNode;
  splash?: boolean;
  registrationButton?: boolean;
}
const Page = async ({
  config,
  children,
  splash = false,
  registrationButton = false
}: DocumentProps) => {
  const registrationStatus = await getRegistrationStatus()
  const projectUrl = await getCurrentProjectURL()
  return (
  <div className={styles.page}>
    <NavBar
      displaySections={config.displaySections}
      splashMode={splash}
      registrationButton={
        registrationButton && registrationStatus === 'open' ? (
          <RegisterButton settings={config.registration} />
        ) : null
      }
      projectUrl={projectUrl}
    />
    {children}
    <Footer {...getFooterProps(config)} />
  </div>
)};

export default Page;
