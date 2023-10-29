import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import './Cart.scss';
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../store";
import { createOrderByGuest } from "../../store/cart/thunks";
import { CartProduct } from "../../types/product.types";

const Cart: React.FC = () => {
  const cartFromLocalStorage: CartProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cart, setCart] = useState<CartProduct[]>(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  let numberOfProducts = 0;
  cart.forEach(item => numberOfProducts += item.quantity);

  const totalPrice = cart
    .map(({ price, quantity }) => price * quantity)
    .reduce((acc, price) => acc + price, 0);

  const dispatch = useAppDispatch();

  const handleCheckout = () => {
    dispatch(createOrderByGuest('test@gmail.com'))
  }

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className="cart">

      <div className="cart__return">
        <button
          className="cart__arrow"
          onClick={goBack}
        />

        <button
          className="cart__back"
          onClick={goBack}
        >
          Back
        </button>
      </div>

      <h1 className="cart__title">Cart</h1>

      {cart.length
        ? (
          <>
            <div className="cart__wrapper">
              {cart.map((item) => {
                return (
                  <div key={item.id} className="cart__item">
                    <CartItem item={item} handleSetCart={setCart} />
                  </div>
                )
              })}
            </div>

            <div className="cart__checkout">

              <div className="cart__price">
                <span className="cart__number">{`$${totalPrice}`}</span>
                <span className="cart__total">{`Total for ${numberOfProducts} ${numberOfProducts === 1 ? 'item' : 'items'}`}</span>
              </div>

              <button
                className="cart__buy"
                onClick={handleCheckout}
              >
                Checkout</button>
            </div>
          </>
        )
        : <h3 className="cart__no-products">No products in the cart yet</h3>
      }
    </div>
  )
}

export default Cart;