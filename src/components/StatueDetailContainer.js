import React, { Component } from "react";
import "./StatueDetailContainer.module.css";
import { StatueDetails } from "./index";

export class StatueDetailContainer extends Component {
  render() {
    const { name } = this.props.statue;

    return (
      <div className="col-lg-9 col-md-12">
        <h2 className="mb-4">{name}</h2>
        <StatueDetails statue={this.props.statue} />
      </div>
    );
  }
}
