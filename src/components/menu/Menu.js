import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Cookie } from '../../Utils';

class Menu extends Component {

  handleClick = (e) => {
    e.preventDefault();
    Cookie.setCookie('login', false);
    window.location.replace('/login');
  }

  render() {
    return (
      <div className="Menu">
        <NavLink to="/teste1">teste1</NavLink>
        <NavLink to="/teste2">teste2</NavLink>
        <NavLink to="/teste3">teste3</NavLink>
        <a href="logout" onClick={this.handleClick}>teste3</a>
      </div>
    );
  }
}

export default Menu;
