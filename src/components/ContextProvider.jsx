import CartContext from './cart-context';

const ContextProvider = (props) => {
  const addProductHandler = () => {};

  const removeProductHandler = () => {};

  const cartContext = {
    products: [],
    addProduct: addProductHandler,
    removeProduct: removeProductHandler,
  };
  return (
    <CartContext.Provider initial={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
