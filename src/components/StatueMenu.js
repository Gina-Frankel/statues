import React, { Component } from "react";
import { StatueMenuItem } from "./StatueMenuItem";
import slaverStatueList from "../statues/slavers.js";

export class StatueMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statues: props.statues ? props.statues : slaverStatueList,
    };
  }

  render() {
    console.log(this.state);
    const items = this.state.statues.map((item, index) => {
      console.log(item);
      return <StatueMenuItem key={index} value={item} />;
    });

    return <ul>{items}</ul>;
  }
}
