import { useContext } from 'react';
import CartContext from '../cart-context';
import './cartModal.css';

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
        <p>No Items In Cart</p>
      ) : (
        <>
          <ul>
            {cartCtx.cartItems.map((item, index) => (
              <li key={`${item.id}-${item.size}-${index}`}>
                {item.name} - {item.size.toUpperCase()} - {item.quantity} × ₹
                {item.price}
              </li>
            ))}
          </ul>
          <h3 className="cart-total">Cart Total: ₹{cartTotal}</h3>
        </>
      )}
      <div style={{ textAlign: 'right', marginTop: '1.5rem' }}>
        <button style={{ marginRight: '1rem' }}>Order</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CartModal;
