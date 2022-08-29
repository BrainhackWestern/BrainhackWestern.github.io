import logo from "../public/img/brainhack_logo.png";
import Link from "next/link";
import Image from "./image";
import useScrollPosition from "../services/scroll-position/use";
import { DisplaySections } from "../interfaces/site-config";
import { useState } from "react";

interface NavBarProps {
  displaySections: DisplaySections;
  splashMode?: boolean;
}

export const NavBar = ({ displaySections, splashMode }: NavBarProps) => {
  const {
    state: { scrollPosition },
  } = useScrollPosition();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${
        splashMode ? "fixed-top" : "sticky-top"
      } ${!splashMode || scrollPosition > 0 || open ? "navbar-white" : ""}`}
    >
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">
            <Image src={logo} width={58} height={40}></Image>
          </a>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/#about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            {displaySections.schedule ?? true ? (
              <li className="nav-item">
                <Link href="/#schedule">
                  <a className="nav-link">Schedule</a>
                </Link>
              </li>
            ) : null}
            {displaySections.tutorial ?? true ? (
              <li className="nav-item">
                <Link href="/#tutorials">
                  <a className="nav-link">Tutorials</a>
                </Link>
              </li>
            ) : null}
            <li className="nav-item">
              <Link href="/#location">
                <a className="nav-link">Location</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="https://github.com/BrainhackWestern/BrainhackWestern.github.io/wiki/Projects">
                <a className="nav-link">Projects</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/FAQ">
                <a className="nav-link">FAQ</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="https://brainhack.org/code-of-conduct.html">
                <a className="nav-link">Code of Conduct</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
