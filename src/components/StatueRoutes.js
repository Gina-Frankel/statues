import React, { Component } from "react";
import SlaverStatueList from "../statues/slavers.js";
import { StatueDetailContainer } from "./index";
import { BrowserRouter as Route, Switch } from "react-router-dom";

export class StatueRoutes extends Component {
  render() {
    const newRoute = SlaverStatueList.map((statue, index) => {
      const url = `/StatueDetailContainer/${statue.name.replace(/\s/g, "-")}`;
      return (
        <Route key={index} path={url}>
          <StatueDetailContainer statue={statue} />
        </Route>
      );
    });

    return <Switch>{newRoute}</Switch>;
  }
}
