import React, { Component } from "react";
import StatueList from "./Statuelist";
import SlaverStatues from "../Statues/slavers";

export class StatueListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statues: SlaverStatues,
    };
  }

  render() {
    return (
      <div>
        <h1>Statues</h1>
        <StatueList statue={this.state.statues} />
      </div>
    );
  }
}

export default StatueListContainer;
