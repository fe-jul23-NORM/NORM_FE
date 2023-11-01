import React, { useEffect, useState } from "react";
import CartItem from "./CartItem/CartItem";
import './Cart.scss';
import { useAppDispatch, useAppSelector } from "../../store";
import { createOrderByGuest } from "../../store/cart/thunks";
import { CartProduct } from "../../types/product.types";
import { setStateCart, getTotalQuantity } from "../../store/cart/slice";
import BackButton from '../BackButton/BackButton';
import Button from '../Button/Button';

const Cart: React.FC = () => {
  const cartFromLocalStorage: CartProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cart, setCart] = useState<CartProduct[]>(cartFromLocalStorage);
  const numberOfProducts = useAppSelector((state) => state.cart.totalQuantity)

  const totalPrice = cart
    .map(({ price, quantity }) => price * quantity)
    .reduce((acc, price) => acc + price, 0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setStateCart(cart));
    dispatch(getTotalQuantity());
  }, []);

  const handleCheckout = () => {
    dispatch(createOrderByGuest('test@gmail.com'))
  }

  return (
    <div className="cart">

      <BackButton/>

      <h1 className="cart__title">Cart</h1>

      {cart.length
        ? (
          <div className='cart__content'>
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
              
              <Button
                handleClick={handleCheckout}
                text='Checkout'
              />
            </div>
          </div>
        )
        : <h3 className="cart__no-products">No products in the cart yet</h3>
      }
    </div>
  )
}

export default Cart;
