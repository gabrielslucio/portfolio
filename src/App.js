import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Welcome from './container/Welcome/Welcome';
import About from './container/About/About';
import Projects from './container/Projects/Projects';

import './App.css';
import './../src/styles/Body.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />   
      <About />  
      <Projects />
      
    </div>
  );
}

export default App;
