import { useState } from 'react';
import ProductInput from './components/ProductInput';
import ContextProvider from './components/ContextProvider';
import Modal from './components/UI/Modal';
import './App.css';

function App() {
  const [showCart, setShowCart] = useState(false);

  const openCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  return (
    <>
      <header>
        <button onClick={openCartHandler}>Cart</button>
      </header>
      {showCart && (
        <Modal onClose={closeCartHandler}>
          <h2>Cart Items</h2>
          <p>User Cart Items</p>
          <button onClick={closeCartHandler}>Close</button>
        </Modal>
      )}
      <ProductInput />
    </>
  );
}

export default App;
