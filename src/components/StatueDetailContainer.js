import React, { Component } from "react";
import "./StatueDetailContainer.module.css";

export class StatueDetailContainer extends Component {
  render() {
    const {
      name,
      wikiArticleURI,
      artworkURI,
      slaverSummary,
      image,
    } = this.props.statue;

    return (
      <div className="col-lg-9 col-md-12">
        <div className="row mt-2">
          <h2 className="mb-4">{name}</h2>
          <div className="col-md-5 pb-4">
            <img src={image} alt="default" />
            Information about the artwork can be found at:{" "}
            <a
              href={artworkURI}
              target="_blank"
              rel="noopener noreferrer"
              alt={name}
            >
              ArtUK page
            </a>
          </div>
          <div className="col-sm-12 col-md-7 container">
            <p>{slaverSummary}</p>
            More Information about {name} can be found at:{" "}
            <a
              href={wikiArticleURI}
              target="_blank"
              rel="noopener noreferrer"
              alt={name}
            >
              Wikipedia article
            </a>
          </div>
        </div>
      </div>
    );
  }
}
