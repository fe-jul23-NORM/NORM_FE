import React from 'react';
import './Button.scss';
import classNames from 'classnames';

type Props = {
  text: string,
  handleClick: (e: React.MouseEvent) => void,
  disabled?: boolean,
  isSelected?: boolean,
  isDanger?: boolean,
}

export const Button: React.FC<Props> = ({ text, handleClick, disabled, isSelected, isDanger }) => {

  return (
    <button
      className={classNames('cart-button', {
        'cart-button--selected': isSelected,
        'cart-button--danger': isDanger,
      })}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
};
