import React from 'react';
import './Heading.css';


function NavBar() {
  return (
    <div className="heading">
    <nav className="navbar navbar-expand-lg heading">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="#">About</a>
        <a className="nav-item nav-link" href="#">Statues</a>
      </div>
    </div>
    </nav>
    </div>
  );
}

export default NavBar;
