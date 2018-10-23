import React, { Component } from 'react';
import './Login.css';

import PlayCircleFilled from '@material-ui/icons/PlayCircleFilledRounded'
import Person from '@material-ui/icons/PersonRounded'
import VpnKey from '@material-ui/icons/VpnKeyRounded'

class App extends Component {
  render() {
    const hour = new Date().getHours()
    let period = ""

    if ((hour >= 0 && hour < 5) || (hour >= 18 && hour <= 23)) {
      period = "uma boa noite"
    }

    else if (hour >= 5 && hour <= 11) {
      period = "um bom dia"
    }

    else if (hour >= 12 && hour < 18) {
      period = "uma boa tarde"
    }

    return (
      <div className="Login">
        <form>
          <PlayCircleFilled className="logo" />

          <h1>Bem-vindo ao Mudifast</h1>
          <p>Tenha {period}</p>

          <div>
            <div className="input">
              <div className="inputLogo">
                <Person />
              </div>
              <input type="text" placeholder="Matrícula"/>
            </div>
            <div className="input">
              <div className="inputLogo">
                <VpnKey />
              </div>
              <input type="password" placeholder="Senha"/>
            </div>

            <button>Entrar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
