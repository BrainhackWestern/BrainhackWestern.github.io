import logo from "../public/img/brainhack_logo.png"
import Link from "next/link"
import Image from "next/dist/client/image"

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">
                        <Image src={logo} width={58} height={40}></Image>
                    </a>
                </Link>
            <button
                className="navbar-toggler"
                type="button"
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
                        <a href="#about" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#schedule" className="nav-link">Schedule</a>
                    </li>
                    <li className="nav-item">
                        <a href="#tutorials" className="nav-link">Tutorials</a>
                    </li>
                    <li className="nav-item">
                        <a href="#location" className="nav-link">Location</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://github.com/BrainhackWestern/BrainhackWestern.github.io/wiki/Frequently-Asked-Questions" className="nav-link">FAQ</a>
                    </li>
                    
                </ul>
            </div>
            
            </div>
      </nav> 
    )
}