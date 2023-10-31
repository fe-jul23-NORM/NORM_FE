import React, { useEffect, useState } from 'react';
import './Button.scss';
import classNames from 'classnames';
import { CartProduct } from '../../types/product.types';

type Props = {
  item?: CartProduct,
  text: string,
  handleClick: (e: React.MouseEvent) => void,
  disabled?: boolean,
}

const Button: React.FC<Props> = ({ item, text, handleClick, disabled }) => {  
  const cart: CartProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const [isSelected, setIsSelected] = useState(false);
  const [currentText, setCurrentText] = useState(text);

  useEffect(() => {
    if (item) {
      const itemInCart = cart.find(({ id }) => id === item.id);
      setIsSelected(!!itemInCart);

      if (!isSelected && itemInCart) {
        setCurrentText('Added to cart');
      }
    }
  }, [item, cart, isSelected]);

  return (
    <button
      className={classNames("cart-button", {"cart-button--selected": (isSelected)})}
      onClick={handleClick}
      disabled={disabled}
    >
      {currentText}
    </button>
  )
};

export default Button;
