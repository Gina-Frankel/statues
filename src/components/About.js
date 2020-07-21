import React from "react";
import labels from "../labels";
import developers from "../developers";

export function About() {
  const githubLinks = developers.map((developer) => {
    const githubUrl = "https://github.com/" + developer.githubUsername;
    return (
      <li key={developer.githubUsername}>
        <a href={githubUrl}> {developer.name}</a>
      </li>
    );
  });
  return (
    <>
      <div>{labels.aboutHeading}</div>
      <div>{labels.aboutMissionTitle}</div>
      <div>{labels.aboutMissionTitleText}</div>
      <ul>{githubLinks}</ul>
    </>
  );
}
