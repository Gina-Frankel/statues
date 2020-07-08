import React, { Component } from "react";
import { StatueListItem } from "./StatueListItem";

export class StatueList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const statues = this.props.statue;
    const items = statues.map((item) => (
      <StatueListItem key={item.name} value={item} />
    ));

    return <ul>{items}</ul>;
  }
}
