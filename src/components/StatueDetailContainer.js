import React, { Component } from "react";
import style from "./StatueDetailContainer.module.css";

export class StatueDetailContainer extends Component {
  render() {
    const { name, wikiArticleURI, artworkURI } = this.props.statue;

    return (
      <div className={style.container}>
        <div>{name}</div>
        <div>
          Information about {name} can be found at:{" "}
          <a href={wikiArticleURI} target="_blank" alt={name}>
            Wikipedia article
          </a>
        </div>
        <div>
          Information about the artwork can be found at:{" "}
          <a href={artworkURI} target="_blank" alt={name}>
            ArtUK page
          </a>
        </div>
      </div>
    );
  }
}
