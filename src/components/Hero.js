import React from "react";
import genericStatuePicture from "../statue.png";
import labels from "../labels";

export function Hero() {
  return (
    <div className="row justify-content-end">
      <div className="jumbotron mt-5 col-lg-5 col-sm-12 ">
        <h1 className="display-4  ">{labels.heroHeading}</h1>
        <p className="lead col-9">{labels.heroSubHeading}</p>
        <p> find out more</p>
      </div>
      <div className="col-lg-7 col-sm-12 align-self-end text-right">
        <img
          src={genericStatuePicture}
          alt="Generic problematic statue"
        ></img>
      </div>
    </div>
  );
}
