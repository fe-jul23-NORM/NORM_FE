import React from 'react';
import './Button.scss';
import classNames from 'classnames';

type Props = {
  text: string,
  handleClick: () => void,
  isSelected?: boolean,
}

const Button: React.FC<Props> = ({ text, handleClick , isSelected }) => {
  return (
    <button
      className={classNames("cart-button", {"cart-button--selected": isSelected})}
      onClick={handleClick}
    >
      {text}
    </button>
  )
};

export default Button;
