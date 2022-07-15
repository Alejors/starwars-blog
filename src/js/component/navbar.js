import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <Link className="text-decoration-none" to="/">
          <span className="navbar-brand">
            starwars
          </span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/people">
              People
            </Link>
            <Link className="nav-link" to="/vehicles">
              vehicles
            </Link>
            <Link className="nav-link" to="/planets">
              Planets
            </Link>
          </div>
        </div>
        <span className="nav-item dropdown float-right">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
            Favorites <span className="badge bg-dark">0</span>
          </a>

          {/* PENDIENTE RENDERIZADO CONDICIONADO SEGUN LISTADO DE FAVORITOS */}
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </span>
      </div>
    </nav>

  );
};
