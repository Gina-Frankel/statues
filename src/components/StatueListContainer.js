import React, { Component } from "react";
import StatueList from "./Statuelist";
import slaverStatueList from "./../statues/slavers.js";

 export class StatueListContainer extends Component {

  render() {
    return (
      <div>
        <h1>Statues</h1>
        <StatueList statue={slaverStatueList} />
      </div>
    );
  }
}

//export class StatueListContainer;
