import React, { useEffect, useState } from "react";
import CartItem from "./CartItem/CartItem";
import './Cart.scss';
import { useAppDispatch, useAppSelector } from "../../store";
import { createOrderByGuest, createOrderByUser } from "../../store/cart/thunks";
import { CartProduct } from "../../types/product.types";
import { setStateCart, getTotalQuantity } from "../../store/cart/slice";
import BackButton from '../BackButton/BackButton';
import Button from '../Button/Button';
import PageNavigation from "../PageNavigation/PageNavigation";
import { selectUser } from "../../store/auth/selectors";
import Input from "../Input/Input";
import { EMAIL_REGEX } from "../../constants/regex";

const Cart: React.FC = () => {
  const cart = useAppSelector(state => state.cart.cart);
  const numberOfProducts = useAppSelector((state) => state.cart.totalQuantity);
  const user = useAppSelector(selectUser);
  const [guestEmail, setGuestEmail] = useState('');
  const [isError, setIsError] = useState(true);

  const totalPrice = cart
    .map(({ price, quantity }) => price * quantity)
    .reduce((acc, price) => acc + price, 0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setStateCart(cart));
    dispatch(getTotalQuantity());
  }, []);

  const handleCheckout = () => {
    if (user) {
      dispatch(createOrderByUser())
    } else {
      dispatch(createOrderByGuest(guestEmail))
    }
  }

  const handleGuestEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuestEmail(e.target.value);
    setIsError(!EMAIL_REGEX.test(e.target.value));
  }

  return (
    <div className="cart">
      <div className="cart__nav">
        <PageNavigation links={[{ link: 'cart', text: 'Cart' }]} />
      </div>
      <BackButton />

      <h1 className="cart__title">Cart</h1>

      {cart.length
        ? (
          <div className='cart__content'>
            <div className="cart__wrapper">
              {cart.map((item) => {
                return (
                  <div key={item.id} className="cart__item">
                    <CartItem item={item} />
                  </div>
                )
              })}
            </div>

            <div className="cart__checkout">

              <div className="cart__price">
                <span className="cart__number">{`$${totalPrice}`}</span>
                <span className="cart__total">{`Total for ${numberOfProducts} ${numberOfProducts === 1 ? 'item' : 'items'}`}</span>
              </div>
              {!user &&
                <div className="cart__input">
                  <Input
                    name="email"
                    placeholder="Enter email"
                    value={guestEmail}
                    onChange={handleGuestEmailChange}
                    isInvalid={isError}
                    error={isError ? 'Invalid email' : ''}
                  />
                </div>
              }
              <Button
                handleClick={handleCheckout}
                text='Checkout'
                disabled={!user ? isError : false}
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
