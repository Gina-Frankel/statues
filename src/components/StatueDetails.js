import React, { Component } from "react";

export class StatueDetails extends Component {
  render() {
    const {
      name,
      wikiArticleURI,
      artworkURI,
      slaverSummary,
      image,
    } = this.props.statue;

    return (
      <div className="row mt-2">
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
        <div className="col-sm-12 col-md-7 ">
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
    );
  }
}
