import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Welcome from './container/Welcome/Welcome';

import './App.css';
import './../src/styles/Body.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />     
      
    </div>
  );
}

export default App;
