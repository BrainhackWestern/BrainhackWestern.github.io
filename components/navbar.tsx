import Link from "next/link"

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">Brainhack</a>
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
                    <a href="/" className="nav-link active" aria-current="page">Home</a>
                </li>
                </ul>
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link href="/FAQ">
                        <a className="nav-link">FAQ</a>
                    </Link>
                </li>
                </ul>
            </div>
            
            </div>
      </nav> 
    )
}