import React from "react";
import genericStatuePicture from "../statue.png";
import labels from "../labels";

export function Hero() {
  return (
    <div>
      <img
        src={genericStatuePicture}
        className="float-right"
        alt="Generic problematic statue"
      ></img>
      <div className="jumbotron px-5 mt-5 col-9">
        <h1 className="display-4">{labels.heroHeading}</h1>
        <p className="lead col-9">{labels.heroSubHeading}</p>
      </div>
    </div>
  );
}
