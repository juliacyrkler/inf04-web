function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
            <div className="container">
                <a href="#" className="navbar-brand fw-bold">
                    Galeria Podróży
                </a>

                <button className="navbar-toggler"
                    tyoe="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menuGlowne"
                    aria-controls="menuGlowne"
                    aria-expanded="false"
                    aria-label="Przełącz menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menuGlowne">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#galeria" aria-current="page" className="nav-link active">
                                Galeria
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#kategorie" className="nav-link">
                                Kategorie
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#stopka" className="nav-link">
                                Kontakt
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar