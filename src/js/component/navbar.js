import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import '../../styles/navbar.css';

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <Link className="text-decoration-none" to="/">
          <span className="navbar-brand starwars">
            Starwars
          </span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
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
          <input className="form-control me-1 float-right" type="search" placeholder="Search" aria-label="Search"></input>
        </div>
        <span className="nav-item dropdown float-right">
          <a className="nav-link dropdown-toggle text-alert" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
            Favorites <span className="badge bg-dark">{store.favorites.length}</span>
          </a>

          <ul className="dropdown-menu dropdown-menu-end">
            {store.favorites == 0 ?
              (<li className="dropdown-item text-center">(None)</li>) :
              (store.favorites.map((ele, i) => (
                <li className="d-flex dropdown-item justify-content-between" key={i}>
                  <Link to={ele.url}>
                    {ele.name}
                  </Link>
                  <span className="btn btn-secondary btn-sm ms-2" onClick={() => actions.deleteFavorite(i)}><i className="fas fa-trash-alt"></i></span>
                </li>
              ))
              )
            }
          </ul>
        </span>
      </div>
    </nav>

  );
};
