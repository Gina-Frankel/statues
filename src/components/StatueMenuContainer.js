import React, { Component } from "react";
import { StatueList } from "./StatueMenu";

export class StatueMenuContainer extends Component {
  render() {
    return (
      <div>
        <h1>Statues</h1>
        <StatueList />
      </div>
    );
  }
}
