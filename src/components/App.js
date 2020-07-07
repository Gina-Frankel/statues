import React from 'react';
import NavBar from './NavBar.js'
import Hero from './Hero.js'
import Picture from './LandingPicture.js'
import StatueListContainer from './StatueListContainer.js'
import './App.css';
import '../index.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <NavBar/>
      </header>
      <div className="landing-page">
        <div className="row justify-content-around">
          <div className="col-lg-6 text-center">
          <Hero/>
          </div>
          <div className="col-lg-5 text-center">
          <Picture/>
          </div>
        </div>
      </div>
      <div>
        <StatueListContainer/>
      </div>
    </div>
  );
}

export default App;
