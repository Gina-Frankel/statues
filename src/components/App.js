import React from "react";  
import { Hero, NavContainer } from "./index.js";
import { StatueMenuContainer } from "./StatueMenuContainer.js";
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
        <StatueMenuContainer />
      </div>
    </div>
  );
}

export default App;
