import React, { Component } from 'react';
import './App.css';

import Portaria from './components/Portaria/Portaria';
import Birthday from './components/Birthday/Birthday';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container"></div>
        <div className="portaria">
          <Portaria />
        </div>
        <div className="container"></div>
      </div>
    );
  }
}

export default App;
