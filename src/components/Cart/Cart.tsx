import React, { useEffect, useState } from "react";
import './Cart.scss';
import { useAppDispatch, useAppSelector } from "../../store";
import { setStateCart, getTotalQuantity } from "../../store/cart/slice";
import { selectUser } from "../../store/auth/selectors";
import { EMAIL_REGEX } from "../../constants/regex";
import { selectCart, selectCartLoading } from '../../store/cart/selectors';
import { CheckoutModal } from "./CheckoutModal";
import { Modal } from "../Modal";
import { PageNavigation } from "../PageNavigation";
import { BackButton } from "../BackButton";
import { CartItem } from "./CartItem";
import { Input } from "../Input";
import { Button } from "../Button";

export const Cart: React.FC = () => {
  const isLoading = useAppSelector(selectCartLoading)

  // need to check

  const cart = useAppSelector(selectCart);
  const numberOfProducts = useAppSelector((state) => state.cart.totalQuantity);
  const user = useAppSelector(selectUser);
  const [isCheckoutOpen, setCheckoutModal] = useState(false);
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

  const handleOpenCheckout = () => {
    setCheckoutModal(!isCheckoutOpen);
  }

  const handleGuestEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuestEmail(e.target.value);
    setIsError(!EMAIL_REGEX.test(e.target.value));
  }

  return (
    <div className="cart">
      {isCheckoutOpen && (
        <Modal
          outsideHandler={handleOpenCheckout}
          closeFunc={handleOpenCheckout}
          withCloseIcon
        >
          <CheckoutModal onClose={handleOpenCheckout} email={guestEmail} />
        </Modal>
      )}
      <div className="cart__nav">
        <PageNavigation links={[{ link: '/cart', text: 'Cart' }]} />
      </div>
      <div className="item-card__back-wrapper">
        <BackButton />
      </div>
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
                handleClick={handleOpenCheckout}
                text='Checkout'
                disabled={isLoading ? true : !user ? isError : false}
              />
            </div>
          </div>
        )
        : <h3 className="cart__no-products">No products in the cart yet</h3>
      }
    </div>
  )
}
