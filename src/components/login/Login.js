import React, { Component } from 'react'
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilledRounded'
import Person from '@material-ui/icons/PersonRounded'
import VpnKey from '@material-ui/icons/VpnKeyRounded'

import './Login.css';
import Input from './input/Input'

class Login extends Component {
  state = {
    matricula: '',
    senha: ''
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

    let button;

    if (this.state.matricula !== '' && this.state.senha) {
      button = <button className="active">Entrar</button>
    }

    else {
      button = <button tabIndex='-1'>Entrar</button>
    }

    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <PlayCircleFilled />

          <h1>Bem-vindo ao Mudifast</h1>

          <p>Tenha {period}</p>

          <div>
            <Input 
              icon={<Person/>}
              name="matricula"
              type="text"
              placeholder="Matrícula"
              onChange={this.handleChange}
              autoFocus />

            <Input 
              icon={<VpnKey/>}
              name="senha"
              type="password"
              placeholder="Senha"
              onChange={this.handleChange} />

            {button}
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
