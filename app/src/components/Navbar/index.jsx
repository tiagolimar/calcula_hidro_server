import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-body-tertiary border shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand text-primary fw-bold" to="/">CalculaHidro</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"> <Link className="nav-link" to="/">Cadastro</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to="/Tubos">Tubulações</Link> </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}