import React from "react";
import { Hero, NavContainer, StatueRoutes, About } from "./index.js";
import { StatueMenuContainer } from "./StatueMenuContainer.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "../index.css";
import "./index.js";

function App() {
  return (
    <div className="app">
      <Router>
        <header className="App-header">
          <NavContainer />
        </header>
        <div className="container">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Hero />
              <div className="row justify-content-between mt-3">
                <StatueMenuContainer />
                <StatueRoutes />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
