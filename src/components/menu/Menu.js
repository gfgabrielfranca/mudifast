import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.css';
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
        <div className="box">
          <NavLink to="/portaria">portaria</NavLink>
          <NavLink to="/informe">informe</NavLink>
          <a href="logout" onClick={this.handleClick}>logout</a>
        </div>

        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Menu;
