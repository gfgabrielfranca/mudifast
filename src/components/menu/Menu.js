import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <NavLink to="/teste1">teste1</NavLink>
        <NavLink to="/teste2">teste2</NavLink>
        <NavLink to="/teste3">teste3</NavLink>
      </div>
    );
  }
}

export default Menu;
