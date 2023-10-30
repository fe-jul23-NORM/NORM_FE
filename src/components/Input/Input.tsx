import React from 'react';
import './Input.scss';

type Props = {
  name: string,
  placeholder: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  value: string,
}

const Input: React.FC<Props> = ({
  name,
  placeholder,
  onChange,
  value,
}) => {``
  return (
    <div className="wrapper">
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        className="input-field"
        onChange={onChange}
      >
      </input>

      <label></label>

    </div>
  )
};

export default Input;
