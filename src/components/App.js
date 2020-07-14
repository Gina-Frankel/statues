import React from "react";
import { Hero, NavContainer, StatueDetailContainer } from "./index.js";
import { StatueMenuContainer } from "./StatueMenuContainer.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SlaverStatueList from "../statues/slavers.js";

import "./App.css";
import "../index.css";
import "./index.js";

function App() {
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

  return (
    <div className="App">
      <header className="App-header">
        <NavContainer />
      </header>
      <div>
        <Hero />
        <Router>
          <StatueMenuContainer />
          <Switch>{newRoute}</Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
