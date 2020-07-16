import React, { Component } from "react";
import "./StatueDetailContainer.module.css";

export class StatueDetailContainer extends Component {
  render() {
    const { name, details } = this.props.statue;

    return (
      <div className="col-lg-9 col-md-12">
        <div className="row mt-2">
          <h2 className="mb-4">{name}</h2>
          <div className="col-sm-5">
            <img src="../../default.png" />
          </div>
          <div className="col-sm-7 container">
            <div className="mt-3 px-3">{details}</div>
          </div>
        </div>
      </div>
    );
  }
}
