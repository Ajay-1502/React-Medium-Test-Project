import { useState, useEffect } from 'react';
import DisplayProduct from './DisplayProduct';

const ProductInput = () => {
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

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
      <div>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="tshirt">T-Shirt Name :</label>
          <input id="tshirt" name="tshirt" type="text" />
          <label htmlFor="description">Description :</label>
          <input id="description" name="description" type="text" />
          <label htmlFor="price">Price :</label>
          <input id="price" name="price" type="number" min="0" />
          <label htmlFor="L-size">L</label>
          <input id="L-size" name="L" min="0" type="number" />
          <label htmlFor="M-size">M</label>
          <input id="M-size" name="M" min="0" type="number" />
          <label htmlFor="S-size">S</label>
          <input id="S-size" name="S" min="0" type="number" />
          <button type="submit">Add Product</button>
        </form>
      </div>
      <DisplayProduct products={products} updateProducts={setProducts} />
    </>
  );
};

export default ProductInput;
