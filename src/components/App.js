import React from 'react';
import Heading from './Heading.js'
import StatueListContainer from './StatueListContainer.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading/>
      </header>
      <div>
        <StatueListContainer/>
      </div>
    </div>
  );
}

export default App;
