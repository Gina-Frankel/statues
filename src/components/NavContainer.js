import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export function NavContainer() {
  return (
    <div className="bg-danger">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="ml-auto navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Statues
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
