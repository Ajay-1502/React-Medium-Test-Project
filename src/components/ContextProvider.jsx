import { useState } from 'react';
import CartContext from './cart-context';

const ContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addProductHandler = (product, size) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => {
        return item.id == product.id && item.size == size;
      });

      if (existingIndex !== -1) {
        const updateItem = [...prevItems];
        updateItem[existingIndex] = {
          ...updateItem[existingIndex],
          quantity: updateItem[existingIndex].quantity + 1,
        };
        return updateItem;
      } else return [...prevItems, { ...product, size, quantity: 1 }];
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
