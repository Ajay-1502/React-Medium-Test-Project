import { useContext } from 'react';
import CartContext from '../Context/cart-context';
import './CartModal.css';

const CartModal = ({ onClose }) => {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h2>Cart Items</h2>
      <hr />
      {cartCtx.cartItems.length === 0 ? (
        <p>No Items In The Cart</p>
      ) : (
        <>
          <ul>
            {cartCtx.cartItems.map((item, index) => (
              <li key={`${item.id}-${item.size}-${index}`}>
                {item.name} - {item.size[0].toUpperCase()} - {item.quantity} × ₹
                {item.price}
              </li>
            ))}
          </ul>
          <h3 className="cart-total">Cart Total: ₹{cartTotal}</h3>
        </>
      )}
      <div className="cart-buttons">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <button className="order-btn">Order</button>
      </div>
    </div>
  );
};

export default CartModal;
