import React from 'react';
import './Input.css';

const Input = ({icon, name, type, placeholder, onFocus, onBlur, onChange}) => {
  return (
    <div className="Input">
      <div>
        {icon}
      </div>

      <input />
        {/* name={props.name}
        type={props.type}
        placeholder={props.placeholder}/>
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onChange={this.handleChange} /> */}
    </div>
  );
}

export default Input;
