import React from "react";
import { Hero, NavContainer, StatueRoutes } from "./index.js";
import { StatueMenuContainer } from "./StatueMenuContainer.js";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import "../index.css";
import "./index.js";

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <NavContainer />
      </header>
      <div className="container">
        <Hero />
        <Router>
          <div className="row justify-content-between mt-3">
            <StatueMenuContainer />
            <StatueRoutes />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
