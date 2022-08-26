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
      } ${
        !splashMode || scrollPosition > 0 || open ? "navbar-white" : ""
      }`}
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
              <a href="/#about" className="nav-link">
                About
              </a>
            </li>
            {displaySections.schedule ?? true ? (
              <li className="nav-item">
                <a href="/#schedule" className="nav-link">
                  Schedule
                </a>
              </li>
            ) : null}
            {displaySections.tutorial ?? true ? (
              <li className="nav-item">
                <a href="/#tutorials" className="nav-link">
                  Tutorials
                </a>
              </li>
            ) : null}
            <li className="nav-item">
              <a href="/#location" className="nav-link">
                Location
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/BrainhackWestern/BrainhackWestern.github.io/wiki/Projects"
                className="nav-link"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/FAQ"
                className="nav-link"
              >
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://brainhack.org/code-of-conduct.html"
                className="nav-link"
              >
                Code of Conduct
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
