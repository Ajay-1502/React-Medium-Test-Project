import { useState } from 'react';
import CartContext from './cart-context';

const ContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addProductHandler = (product, size) => {
    setCartItems((prevItems) => {
      return [...prevItems, { ...product, size }];
    });
  };

  const cartContext = {
    cartItems: cartItems,
    addToCart: addProductHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
