import React from "react";
import genericStatuePicture from "../statue.png";
import labels from "../labels";

export function Hero() {
  return (
    <div className="d-flex flex-row">
      <div className="jumbotron px-5 mt-5 col-sm ">
        <h1 className="display-4  ">{labels.heroHeading}</h1>
        <p className="lead col-9">{labels.heroSubHeading}</p>
        <p> find out more</p>
      </div>
      <div className=" mt-auto ">
        <img
          src={genericStatuePicture}
          //Think is not necessary?
          className="statueImage"
          alt="Generic problematic statue"
        ></img>
      </div>
    </div>
  );
}
