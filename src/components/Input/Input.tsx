import React from 'react';
import './Input.scss';

type Props = {
  name: string,
  placeholder: string,
}

const Input: React.FC<Props> = ({ name, placeholder }) => {
  return (
    <div className="wrapper">
      <input
          name={name}
          value=""
          placeholder={placeholder}
          className="input-field"
      >          
      </input>

      <label></label>
      
    </div>    
  )
};

export default Input;
