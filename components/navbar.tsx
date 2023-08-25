import { useState } from 'react';

import Link from 'next/link';

import { DisplaySections } from '../interfaces/site-config';
import logo from '../public/img/brainhack_logo.png';
import useScrollPosition from '../services/scroll-position/use';
import style from '../styles/vanilla/navbar.css';
import { getFooterProps } from './footer';
import Image from './image';

interface NavBarProps {
  displaySections: DisplaySections;
  splashMode?: boolean;
  registrationButton?: React.ReactChild | null;
}

export const NavBar = ({
  displaySections,
  splashMode,
  registrationButton
}: NavBarProps) => {
  const {
    state: { scrollPosition }
  } = useScrollPosition();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`${style.navbar} ${splashMode ? 'fixed-top' : 'sticky-top'} ${
        !splashMode || scrollPosition > 0 || open ? style.navbarWhite : ''
      }`}
    >
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">

          <Image src={logo} width={58} height={40} alt="Home"></Image>

        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={(_) => setOpen(!open)}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link href="/#about" className="nav-link">
                About
              </Link>
            </li>
            {displaySections.schedule ?? true ? (
              <li className="nav-item">
                <Link href="/#schedule" className="nav-link">
                  Schedule
                </Link>
              </li>
            ) : null}
            {displaySections.tutorial ?? true ? (
              <li className="nav-item">
                <Link href="/#tutorials" className="nav-link">
                  Tutorials
                </Link>
              </li>
            ) : null}
            <li className="nav-item">
              <Link href="/#location" className="nav-link">
                Location
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="https://github.com/BrainhackWestern/BrainhackWestern.github.io/wiki/Projects"
                className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/FAQ" className="nav-link">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link href="https://brainhack.org/code-of-conduct.html" className="nav-link">
                Code of Conduct
              </Link>
            </li>
          </ul>
          <span
            className={`${style.registerBtn} ${
              !splashMode || scrollPosition > 0 || open
                ? ''
                : style.registerBtnHide
            }`}
          >
            {registrationButton ?? null}
          </span>
        </div>
      </div>
    </nav>
  );
};
