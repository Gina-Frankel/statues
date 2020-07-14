import React, { Component } from "react";
import style from "./StatueDetailContainer.module.css";

export class StatueDetailContainer extends Component {
  render() {
    const statueName = this.props.location.state.name;
    const statueDetail = this.props.location.state.details;

    return (
      <div className={style.container}>
        <div>{statueName}</div>
        <div>{statueDetail}</div>
      </div>
    );
  }
}
