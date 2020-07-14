import React, { Component } from "react";
import SlaverStatueList from "../statues/slavers.js";
import { StatueDetailContainer } from "./index";
import { BrowserRouter as Route } from "react-router-dom";

//   routeGenerator = (SlaverStatueList) => {
//     return SlaverStatueList;
//   };

// const nameNoSpaces = name.replace(/\s/g, "-");
// const statueUrl = "/StatueDetailContainer/" + nameNoSpaces;

export class StatueRoute extends Component {
  render() {
    const nameList = [];
    SlaverStatueList.map((statue) =>
      nameList.push(statue.name.replace(/\s/g, "-"))
    );
    const slaverRoute = nameList.map((name) => (
      // console.log(name) // rightUrl = `/StatueDetailContainer/${name}`;
      // `/StatueDetailContainer/${name}`

      <Route
        key={name}
        path={`/route/${name}`}
        component={StatueDetailContainer}
      />
    ));

    return <div> {slaverRoute} </div>;
    // <Route path={slaverRoute} component={StatueDetailContainer} />;

    //<Route path={rightUrl} component={StatueDetailContainer} />
  }
}
