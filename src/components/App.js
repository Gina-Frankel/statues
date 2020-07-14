import React from "react";
import { Hero, NavContainer, StatueDetailContainer } from "./index.js";
import { StatueMenuContainer } from "./StatueMenuContainer.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SlaverStatueList from "../statues/slavers.js";

import "./App.css";
import "../index.css";
import "./index.js";

function App() {
  const newRoute = SlaverStatueList.map((statue, index) => {
    const url = `/StatueDetailContainer/${statue.name.replace(/\s/g, "-")}`;
    return (
      <Route key={index} path={url}>
        <StatueDetailContainer statue={statue} />
      </Route>
    );
  });

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
