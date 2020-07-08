import React from "react";
import genericStatuePicture from "../statue.png";

export function Hero() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">
        Don't stand for art that doesn't stand for you
      </h1>
      <p className="lead">
        There are dozens of public artworks depicting people involved in slavery
      </p>
      <div className="hero-picture">
        <img src={genericStatuePicture} alt="Generic problematic statue"></img>
      </div>
    </div>
  );
}
