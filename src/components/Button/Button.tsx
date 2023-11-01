import React from 'react';
import './Button.scss';
import classNames from 'classnames';

type Props = {
  text: string,
  handleClick: (e: React.MouseEvent) => void,
  disabled?: boolean,
  isSelected?: boolean,
}

const Button: React.FC<Props> = ({ text, handleClick, disabled, isSelected }) => {

  return (
    <button
      className={classNames("cart-button", {"cart-button--selected": isSelected})}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
};

export default Button;
