import React, { Component } from "react";
import SlaverStatueList from "../statues/slavers.js";
import { StatueDetailContainer } from "./index";
import { BrowserRouter as Route } from "react-router-dom";

export class StatueRoute extends Component {
  render() {
    const nameList = [];
    SlaverStatueList.forEach((statue) =>
      nameList.push(`/StatueDetailContainer/${statue.name.replace(/\s/g, "-")}`)
    );
    const newRoute = [];
    nameList.forEach((name, index) =>
      newRoute.push(
        <Route key={index} path={name} component={StatueDetailContainer} />
      )
    );

    return newRoute;
  }
}
