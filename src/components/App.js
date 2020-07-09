import React from "react";  
import { Hero, NavContainer } from "./index.js";
import { StatueMenuContainer } from "./StatueMenuContainer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "../index.css";
import "./index.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavContainer />  
      </header>
      <div>
        <Hero />
        <Router>
        <StatueMenuContainer />
        <Route path="/"></Route>
        </Router>
      </div>
    </div>
  );
}

export default App;
