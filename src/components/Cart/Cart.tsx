import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="cart">

      <div className="cart__back">
        <span className="cart__arrow"></span>
        
      </div>
      <h1>Cart</h1>

      <CartItem />
      <CartItem />

    </div>
  )
}

export default Cart;