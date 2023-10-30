import React from 'react';
import './Button.scss';

type Props = {
  text: string,
  handleClick: (e: React.MouseEvent) => void,
  disabled?: boolean,
}

const Button: React.FC<Props> = ({ text, handleClick, disabled }) => {
  return (
    <button
      className="cart-button"
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
};

export default Button;
