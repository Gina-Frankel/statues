import React from "react";
import { about } from "../labels";
import developers from "../developers";

export function About() {
  const { heading, mission } = about;

  const githubLinks = developers.map((developer) => {
    const githubUrl = "https://github.com/" + developer.githubUsername;
    return (
      <li key={developer.githubUsername}>
        <a href={githubUrl}> {developer.name}</a>
      </li>
    );
  });

  return (
    <div>
      <h1 className="display-4 my-5">{heading}</h1>
      <section className="my-5">
        <h2 className="mb-3">{mission.title}</h2>
        <p className="text">{mission.text}</p>
      </section>
      <section className="my-5">
        <h2 className="mb-3">Developers</h2>
        <ul>{githubLinks}</ul>
      </section>
    </div>
  );
}
