import React, { Component } from "react";

export class StatueList extends Component {
  render() {
    return (
      <div>
        <p>{this.props.statue[0].statueName}</p>
      </div>
    );
  }
}

export default StatueList;
