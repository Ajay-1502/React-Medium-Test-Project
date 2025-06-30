import React from 'react';

const CartContext = React.createContext({
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
});

export default CartContext;
