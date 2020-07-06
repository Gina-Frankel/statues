import React from 'react';
import Heading from './Heading.js'
import Banner from './LandingBanner.js'
import Picture from './LandingPicture.js'
import StatueListContainer from './StatueListContainer.js'
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Heading/>
      </header>
      <div className="landing-page">
        <div className="row justify-content-around">
          <div className="col-lg-6 text-center">
          <Banner/>
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
