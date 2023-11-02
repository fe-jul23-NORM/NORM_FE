import React from "react";
import './CartItem.scss';
import classNames from "classnames";
import { CartProduct } from "../../../types/product.types";
import { BASE_URI } from "../../../constants/core";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../../../store/cart/slice";
import { useAppDispatch } from "../../../store";

type Props = {
  item: CartProduct,
}

export const CartItem: React.FC<Props> = ({ item }) => {
  const { name, quantity, image, price } = item;
  const totalProductPrice = price * quantity;
  const dispatch = useAppDispatch();
  const cart: CartProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');

  const handleRemoveFromCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(removeFromCart(item))

    const updatedCart = cart.filter(({ id }) => id !== item.id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  const handeleIncrementQuantity = () => {
    dispatch(incrementQuantity(item));

    const currentProduct = cart.find(({ id }) => id === item.id);

    if (currentProduct) {
      const updatedProduct = { ...currentProduct, quantity: currentProduct?.quantity + 1 }
      const updatedCart = cart.map((product) => product.id !== currentProduct.id ? product : updatedProduct);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  }

  const handleDecrementQuantity = () => {
    dispatch(decrementQuantity(item));

    const currentProduct = cart.find(({ id }) => id === item.id);

    if (currentProduct) {
      const updatedProduct = { ...currentProduct, quantity: currentProduct?.quantity - 1 }
      const updatedCart = cart.map((product) => product.id !== currentProduct.id ? product : updatedProduct);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  }

  return (
    <div className="cart-item">

      <div className="cart-item__info">
        <span
          className="cart-item__delete icon-close"
          onClick={handleRemoveFromCart}
        />
        <img src={`${BASE_URI}/${image}`} alt="iPhone" className="cart-item__picture" />
        <p>
          {name}
          <br />
        </p>
      </div>
      <div className="cart-item__bottom">
        <div className="cart-item__number">
          <button
            className={classNames("cart-item__button", quantity <= 1 && "cart-item__button--disabled")}
            onClick={handleDecrementQuantity}
            disabled={quantity === 1}
          >
            <span className='icon-minus' />
          </button>
          <span className="cart-item__number-text">
            {quantity}
          </span>
          <button
            type="button"
            className="cart-item__button"
            onClick={handeleIncrementQuantity}
          >
            <span className='icon-plus' />
          </button>
        </div>
        <p className="cart-item__price">{`$${totalProductPrice}`}</p>
      </div>
    </div>
  )
}
