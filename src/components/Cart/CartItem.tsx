import React, { memo } from "react";
import './CartItem.scss';
import classNames from "classnames";
import { CartProduct } from "../../types/product.types";
import { BASE_URI } from "../../constants/core";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../../store/cart/slice";
import { useAppDispatch } from "../../store";

type Props = {
  item: CartProduct,
}

const CartItem: React.FC<Props> = ({ item }) => {
  const { name, quantity, image, price } = item;
  const totalProductPrice = price * quantity;
  const dispatch = useAppDispatch();

  const remove = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(removeFromCart(item))
  }

  const handeleIncrementQuantity = () => {
    dispatch(incrementQuantity(item))
  }

  const handleDecrementQuantity = () => {
    dispatch(decrementQuantity(item))
  }

  return (
    <div className="cart-item">

      <div className="cart-item__info">
        <span
          className="cart-item__delete"
          onClick={remove}
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
