import React, { Component } from 'react';
import './Login.css';

import TextField from '@material-ui/core/TextField';

class App extends Component {
  render() {
    return (
      <div className="Login">
        <div>
          <h1>Login</h1>
          <form>
            <TextField
              id="standard-name"
              label="Name"
              margin="normal"/>

          </form>
        </div>
      </div>
    );
  }
}

export default App;
