import React, { Component } from "react";
import { StatueMenu } from "./StatueMenu";
import style from "./StatueMenuContainer.module.css";

export class StatueMenuContainer extends Component {
  render() {
    return (
      <div className={style.container}>
        <h1>Statues</h1>
        <StatueMenu />
      </div>
    );
  }
}
