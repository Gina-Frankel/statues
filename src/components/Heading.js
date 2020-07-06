import React from 'react';
import './Heading.css';


function Heading() {
  return (
    <div className="heading">
    <nav className="navbar navbar-expand-lg heading">
    <a className="navbar-brand" href="#"><h1>Problematic Public Art</h1></a>
      <p>Identifing, educating and moving forward</p>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
        <a className="nav-item nav-link" href="#">About</a>
        <a className="nav-item nav-link" href="#">Statues</a>
      </div>
    </div>
    </nav>
    </div>
  );
}

export default Heading;
