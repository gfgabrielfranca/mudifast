import React, { Component } from 'react';
import './Login.css';

import PlayCircleFilled from '@material-ui/icons/PlayCircleFilledRounded'
import Person from '@material-ui/icons/PersonRounded'
import VpnKey from '@material-ui/icons/VpnKeyRounded'

class App extends Component {
  state = {
    matricula: '',
    senha: ''
  }

  handleFocus = (e) => {
    e.target.parentNode.classList.add("inputFocusable")
  }

  handleBlur = (e) => {
    e.target.parentNode.classList.remove("inputFocusable")
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

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
        <form onSubmit={this.handleSubmit}>
          <PlayCircleFilled />

          <h1>Bem-vindo ao Mudifast</h1>

          <p>Tenha {period}</p>

          <div>
            <div className="input">
              <div className="inputLogo">
                <Person />
              </div>

              <input
                name="matricula"
                type="text" 
                placeholder="Matrícula" 
                onFocus={this.handleFocus} 
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                autoFocus/>
            </div>

            <div className="input">
              <div className="inputLogo">
                <VpnKey />
              </div>

              <input
                name="senha"
                type="password"
                placeholder="Senha" 
                onFocus={this.handleFocus} 
                onBlur={this.handleBlur}
                onChange={this.handleChange}/>
            </div>

            {
              this.state.matricula !== '' && this.state.senha !== '' ? (
                <button className="active">Entrar</button>
              ) : (
                <button tabIndex='-1'>Entrar</button>
              )
            }
          </div>
        </form>
      </div>
    );
  }
}

export default App;
