import CartItem from "./CartItem";
import './Cart.scss';
import { useNavigate } from "react-router";

const Cart = () => {
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

      <div className="cart__wrapper">

        <div className="cart__item">
          <CartItem />
        </div>

        <div className="cart__item">
          <CartItem />
        </div>
      </div>

      <div className="cart__checkout">

        <div className="cart__price">
          <span className="cart__number">$2657</span>
          <span className="cart__total">Total for 3 items</span>
        </div>

        <button className="cart__buy">Checkout</button>
      </div>
    </div>
  )
}

export default Cart;