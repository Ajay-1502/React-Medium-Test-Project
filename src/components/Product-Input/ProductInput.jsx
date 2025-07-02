import { useState } from 'react';
import DisplayProduct from '../UI/DisplayProduct';
import './ProductInput.css';

const ProductInput = () => {
  const [products, setProducts] = useState([]);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    let productObj = {
      id: Date.now(),
      name: event.target.tshirt.value,
      description: event.target.description.value,
      price: event.target.price.value,
      lSize: event.target.L.value,
      mSize: event.target.M.value,
      sSize: event.target.S.value,
    };

    setProducts((prevProducts) => [...prevProducts, productObj]);
    event.target.reset();
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={formSubmitHandler} className="product-form">
          <h2>Shoppers Stop For T-shirts</h2>
          <div className="form-row">
            <label htmlFor="tshirt">T-Shirt Name:</label>
            <input id="tshirt" name="tshirt" type="text" required />

            <label htmlFor="description">Description:</label>
            <input id="description" name="description" type="text" required />

            <label htmlFor="price">Price:</label>
            <input id="price" name="price" type="number" min="0" required />
          </div>

          <div className="quantity-labels">Quantity</div>
          <div className="form-row sizes">
            <div>
              <label htmlFor="L-size">L</label>
              <input id="L-size" name="L" min="0" type="number" required />
            </div>
            <div>
              <label htmlFor="M-size">M</label>
              <input id="M-size" name="M" min="0" type="number" required />
            </div>
            <div>
              <label htmlFor="S-size">S</label>
              <input id="S-size" name="S" min="0" type="number" required />
            </div>
          </div>

          <div className="submit-row">
            <button type="submit">Add Product</button>
          </div>
        </form>
      </div>

      <DisplayProduct products={products} updateProducts={setProducts} />
    </>
  );
};

export default ProductInput;
