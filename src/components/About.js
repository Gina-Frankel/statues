import React from "react";
import labels from "../labels";

export function About() {
  return (
    <>
      <div>{labels.AboutHeading}</div>
      <div>{labels.AboutMissionTitle}</div>
      <div>{labels.MissionTitleText}</div>
      <div>{labels.MissionTitle}</div>
    </>
  );
}
