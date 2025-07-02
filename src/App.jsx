import { useState } from 'react';
import ProductInput from './components/Product-Input/ProductInput';
import ContextProvider from './components/Context/ContextProvider';
import Modal from './components/UI/Modal';
import CartModal from './components/UI/CartModal';
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
    <ContextProvider>
      <header>
        <button className="cart-btn" onClick={openCartHandler}>
          Cart
        </button>
      </header>
      {showCart && (
        <Modal onClose={closeCartHandler}>
          <CartModal onClose={closeCartHandler} />
        </Modal>
      )}
      <ProductInput />
    </ContextProvider>
  );
}

export default App;
