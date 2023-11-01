import React, { memo } from "react";
import './CartItem.scss';
import classNames from "classnames";
import { CartProduct } from "../../../types/product.types";
import { BASE_URI } from "../../../constants/core";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../../../store/cart/slice";
import { useAppDispatch } from "../../../store";

type Props = {
  item: CartProduct,
  handleSetCart: (items: CartProduct[]) => void;
}

const CartItem: React.FC<Props> = ({ item, handleSetCart }) => {
  const { name, quantity, image, price } = item;
  const totalProductPrice = price * quantity;
  const dispatch = useAppDispatch();
  const cart: CartProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');

  const handleRemoveFromCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(removeFromCart(item))

    const updatedCart = cart.filter(({ id }) => id !== item.id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    handleSetCart(updatedCart);
  }

  const handeleIncrementQuantity = () => {
    dispatch(incrementQuantity(item));

    const currentProduct = cart.find(({ id }) => id === item.id);
    
    if (currentProduct) {
      const updatedProduct = {...currentProduct, quantity: currentProduct?.quantity + 1}
      const updatedCart = cart.map((product) => product.id !== currentProduct.id ? product : updatedProduct);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      handleSetCart(updatedCart);
    }
  }

  const handleDecrementQuantity = () => {
    dispatch(decrementQuantity(item));

    const currentProduct = cart.find(({ id }) => id === item.id);
    
    if (currentProduct) {
      const updatedProduct = {...currentProduct, quantity: currentProduct?.quantity - 1}
      const updatedCart = cart.map((product) => product.id !== currentProduct.id ? product : updatedProduct);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      handleSetCart(updatedCart);
    }
  }

  return (
    <div className="cart-item">

      <div className="cart-item__info">
        <span
          className="cart-item__delete"
          onClick={handleRemoveFromCart}
        >

        </span>

        <img src={`${BASE_URI}/${image}`} alt="iPhone" className="cart-item__picture" />

        <p>
          {name}
          <br />
          {/* (MQ023) */}
        </p>
      </div>

      <div className="cart-item__bottom">

        <div className="cart-item__number">
          <button
            className={classNames(quantity > 1 ? "cart-item__button" : "cart-item__button--disabled")}
            onClick={handleDecrementQuantity}
            disabled={quantity === 1}
          >
            -
          </button>

          {quantity}

          <button
            type="button"
            className="cart-item__button"
            onClick={handeleIncrementQuantity}
          >
            +
          </button>
        </div>

        <p className="cart-item__price">{`$${totalProductPrice}`}</p>
      </div>
    </div>
  )
}

export default memo(CartItem);
