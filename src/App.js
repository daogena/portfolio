import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Header from './Components/Header'; 
import About from './Components/About';
import Work from './Components/Work'

library.add(fab); 

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Work />
    </div>
  );
}

export default App;
