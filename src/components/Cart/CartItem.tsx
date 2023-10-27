/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import './CartItem.scss';
import classNames from "classnames";

const CartItem = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="cart-item">

      <div className="cart-item__info">
        <span className="cart-item__delete"></span>

        <img src="images/iPhone.png" alt="iPhone" className="cart-item__picture" />

        <p>
          Apple iPhone 14 Pro 128GB Silver 
          <br />
          (MQ023)
        </p>
      </div>

      <div className="cart-item__bottom">

        <div className="cart-item__number">
          <button
            className={classNames(count > 1 ? "cart-item__button" : "cart-item__button--disabled")}
            onClick={(e) => {
              e.preventDefault()
              setCount((prevCount) => prevCount - 1);
            }}
          >
            -
          </button>

          {count}

          <button
            className="cart-item__button"
            onClick={(e) => {
              e.preventDefault()
              setCount((prevCount) => prevCount + 1);
            }}
          >
            +
          </button>
        </div>

        <p className="cart-item__price">$999</p>
      </div>
    </div>
  )
}

export default CartItem;
