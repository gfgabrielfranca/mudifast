import React, { Component } from 'react';
import './Login.css';

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
          <h1>Bem-vindo ao Mudifast</h1>
          <p>Tenha {period}</p>

          <div>
            <div className="input">
              <h5>Matrícula</h5>
              <input type="text"/>
            </div>
            <div className="input">
              <h5>Senha</h5>
              <input type="text"/>
            </div>

            <button>Entrar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
