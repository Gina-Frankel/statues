import React, { Component } from "react";
import StatueList from "./Statuelist";
import slaverStatueList from "./../statues/slavers.js";

export class StatueListContainer extends Component {
  render() {
    return (
      <div>
        <h2>Statues</h2>
        <StatueList statue={slaverStatueList} />
      </div>
    );
  }
}

export default StatueListContainer;
