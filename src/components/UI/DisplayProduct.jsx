import { useContext } from 'react';
import CartContext from '../Context/cart-context';
import './DisplayProduct.css';

const DisplayProduct = ({ products, updateProducts }) => {
  const cartCtx = useContext(CartContext);

  const handleBuy = (productId, size) => {
    const productToAdd = products.find((prod) => prod.id === productId);
    cartCtx.addToCart(productToAdd, size);

    updateProducts((prevProducts) => {
      return prevProducts.map((prod) => {
        if (prod.id === productId) {
          const updateProduct = { ...prod };
          updateProduct[size] = +updateProduct[size] - 1;
          return updateProduct;
        }
        return prod;
      });
    });
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>₹{product.price}</p>
          <div className="button-group">
            <button
              className="buy-btn"
              disabled={product.lSize <= 0}
              onClick={() => handleBuy(product.id, 'lSize')}
            >
              Buy Large ({product.lSize})
            </button>
            <button
              className="buy-btn"
              disabled={product.mSize <= 0}
              onClick={() => handleBuy(product.id, 'mSize')}
            >
              Buy Medium ({product.mSize})
            </button>
            <button
              className="buy-btn"
              disabled={product.sSize <= 0}
              onClick={() => handleBuy(product.id, 'sSize')}
            >
              Buy Small ({product.sSize})
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayProduct;
