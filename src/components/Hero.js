import React from "react";
import genericStatuePicture from "../statue.png";
import { hero } from "../labels";

export function Hero() {
  const { heading, subHeading } = hero;
  return (
    <div className="row justify-content-end">
      <div className="jumbotron mt-5 col-lg-5 col-sm-12 ">
        <h1 className="display-4  ">{heading}</h1>
        <p className="lead col-9">{subHeading}</p>
        <p> find out more</p>
      </div>
      <div className="col-lg-7 col-sm-12 align-self-end text-right">
        <img src={genericStatuePicture} alt="Generic problematic statue"></img>
      </div>
    </div>
  );
}
