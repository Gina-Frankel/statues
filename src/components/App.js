import React from "react";

import { Hero, NavBar } from "./index.js";

//import { NavBar } from "./NavBar.js";
//import { Hero } from "./Hero.js";

// import { HeroPicture } from "./HeroPicture.js";
import StatueListContainer from "./StatueListContainer.js";
import "./App.css";
import "../index.css";
import "./index.js";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <NavBar />
      </header>

      <Hero />

      <div>
        <StatueListContainer />
      </div>
    </div>
  );
}

export default App;
