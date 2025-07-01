import { useContext } from 'react';
import CartContext from '../cart-context';

const CartModal = ({ onClose }) => {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.cartItems.reduce((sum, item) => {
    return sum + +item.price;
  }, 0);

  return (
    <div style={{ color: 'black' }}>
      <h2>Cart Items</h2>
      {cartCtx.cartItems.length === 0 ? (
        <p>User Cart Items</p>
      ) : (
        <ul>
          {cartCtx.cartItems.map((item) => {
            return (
              <li key={item.id}>
                {item.name} - Size: {item.size.toUpperCase()} - ₹{item.price}
              </li>
            );
          })}
        </ul>
      )}
      <h3>Cart Total : {cartTotal} </h3>
      <button onClick={onClose} className="close">
        Close
      </button>
    </div>
  );
};

export default CartModal;
