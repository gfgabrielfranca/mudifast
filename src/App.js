import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import { Cookie } from './Utils';
import Login from './components/login/Login';
import Portaria from './components/portaria/Portaria';
import Inform from './components/inform/Inform';
import NotFound from './components/notFound/NotFound';

const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => 
    JSON.parse(Cookie.getCookie('login')) ? (
      <Component {...props} />
    ) : (
      <Redirect to='/login'/>
    )
  }/>
)

const LoginRouter = ({ ...rest }) => (
  <Route {...rest} render={props => 
    JSON.parse(Cookie.getCookie('login')) ? (
      <Redirect to='/portaria'/>      
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
          <Redirect from="/" exact to="/portaria" />
          <LoginRouter path="/login"/>
          <PrivateRouter path="/portaria" component={Portaria} />
          <PrivateRouter path="/informe" component={Inform} />
          <PrivateRouter component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
