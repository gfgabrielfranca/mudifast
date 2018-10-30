import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import { Cookie } from './Utils';
import Login from './components/login/Login';
import Menu from './components/menu/Menu';

const teste1 = () => <h3>teste1</h3>
const teste2 = () => <h3>teste2</h3>
const teste3 = () => <h3>teste3</h3>
const NotFound = () => <h1>404</h1>

const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => 
    Cookie.getCookie('login') !== 'false' ? (
      <div>
        <Menu />
        <Component {...props} />
      </div>
    ) : (
      <Redirect to='/login'/>
    )
  }/>
)

const LoginRouter = ({ ...rest }) => (
  <Route {...rest} render={props => 
    Cookie.getCookie('login') !== 'false' ? (
      <Redirect to='/teste1'/>      
    ) : (
      <Login />
    )
  }/>
)

class App extends Component {
  render() {
    return (
      <BrowserRouter className="App">
        <Switch>
          <Redirect from="/" exact to="/teste1" />
          <LoginRouter path="/login"/>
          <PrivateRouter path="/teste1" component={teste1} />
          <PrivateRouter path="/teste2" component={teste2} />
          <PrivateRouter path="/teste3" component={teste3} />
          <PrivateRouter component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
