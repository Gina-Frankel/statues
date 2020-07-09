import React, { Component } from "react";
import { StatueMenuItem } from "./StatueMenuItem";
import slaverStatueList from "../statues/slavers.js";

export class StatueMenu extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const statues = slaverStatueList;
    const items = statues.map((item) => (
      <StatueMenuItem key={item.name} value={item} />
    ));

    return <ul>{items}</ul>;
  }
}
