import React, { Component } from 'react'
import StatueList from "./Statuelist"

export class StatueListContainer extends Component {
  render() {
    return (
      <div>
        <h1>Statues</h1>
        <StatueList/>
      </div>
    )
  }
}

export default StatueListContainer
