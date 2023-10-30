import React from 'react';
import './Input.scss';

type Props = {
  name: string,
  placeholder: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string,
}

const Input: React.FC<Props> = ({ name, placeholder, onChange, value }) => {
  return (
    <div className="wrapper">
      <input
          onChange={onChange}
          name={name}
          value={value}
          placeholder={placeholder}
          className="input-field"
      >          
      </input>

      <label></label>
      
    </div>    
  )
};

export default Input;
