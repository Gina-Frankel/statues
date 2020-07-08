import React from "react";
import genericStatuePicture from "../statue.png";

export function Hero() {
  return (
    <div>
      <img
        src={genericStatuePicture}
        className="float-right"
        alt="Generic problematic statue"
      ></img>
      <div className="jumbotron px-5 mt-5 col-9">
        <h1 className="display-4">
          Don't stand for art that doesn't stand for you
        </h1>
        <p className="lead col-9">
          There are dozens of public artworks depicting people involved in
          slavery and other terrible acts.
        </p>
      </div>
    </div>
  );
}
