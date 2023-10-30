import React from 'react';
import './Button.scss';

type Props = {
  text: string,
  handleClick: (e: React.MouseEvent) => void,
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
