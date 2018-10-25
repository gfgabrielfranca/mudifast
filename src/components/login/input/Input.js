import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  handleFocus = (e) => {
    e.target.parentNode.classList.add("inputFocusable")
  }

  handleBlur = (e) => {
    e.target.parentNode.classList.remove("inputFocusable")
  }

  render() {
    const {icon, name, type, placeholder, onChange, autoFocus} = this.props

    return (
      <div className="Input">
        <div>
          {icon}
        </div>
  
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={(e) => {onChange(e)}}
          autoFocus={autoFocus}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur} />
          
      </div>
    );
  }
}

export default Input;
