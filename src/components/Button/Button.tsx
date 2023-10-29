import React from 'react';
import './Button.scss';

type Props = {
  text: string,
  handleClick: () => void,
}

const Button: React.FC<Props> = ({ text, handleClick }) => {
  return (
    <button
      className="cart-button"
      onClick={handleClick}
    >
      {text}
    </button>
  )
};

export default Button;
