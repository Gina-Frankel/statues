import React, { Component } from "react";
import style from "./StatueDetailContainer.module.css";

export class StatueDetailContainer extends Component {
  render() {
    const { name, details } = this.props.statue;

    return (
      <div className={style.container}>
        <div>{name}</div>
        <div>{details}</div>
      </div>
    );
  }
}
