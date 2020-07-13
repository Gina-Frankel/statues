import React from "react";  
import { Hero, NavContainer, StatueDetailContainer } from "./index.js";
import { StatueMenuContainer } from "./StatueMenuContainer.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import slaverStatueList from "../statues/slavers.js";
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
          <Switch>
            <Route path="/StatueDetailContainer/Edward-Colston" component={StatueDetailContainer} />
            <Route path="/StatueDetailContainer/Joseph-Edgar-Boehm" component={StatueDetailContainer} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
