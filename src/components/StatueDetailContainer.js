import React, { Component } from "react";

export class StatueDetailContainer extends Component {
  render() {
    const statueName = this.props.location.state.name;
    const statueDetail = this.props.location.state.details;

    return (
      <>
        <div>{statueName}</div>
        <div>{statueDetail}</div>
      </>
    );
  }
}
