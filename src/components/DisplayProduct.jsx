import { useContext } from 'react';
import CartContext from './cart-context';

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
    <div>
      {products.map((product) => {
        return (
          <ul key={product.id}>
            {product.name} - {product.description} -₹{product.price}
            <button
              disabled={product.lSize <= 0}
              onClick={() => handleBuy(product.id, 'lSize')}
            >
              Buy Large {product.lSize}
            </button>
            <button
              disabled={product.mSize <= 0}
              onClick={() => handleBuy(product.id, 'mSize')}
            >
              Buy Medium {product.mSize}
            </button>
            <button
              disabled={product.sSize <= 0}
              onClick={() => handleBuy(product.id, 'sSize')}
            >
              Buy Small {product.sSize}
            </button>
          </ul>
        );
      })}
    </div>
  );
};

export default DisplayProduct;
