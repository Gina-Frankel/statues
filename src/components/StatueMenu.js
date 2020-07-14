import React, { Component } from "react";
import { StatueMenuItem } from "./StatueMenuItem";
import slaverStatueList from "../statues/slavers.js";

export class StatueMenu extends Component {
  render() {
    const statues = slaverStatueList;
    const items = statues.map((item, index) => (
      <StatueMenuItem key={index} value={item} />
    ));

    return <ul>{items}</ul>;
  }
}
