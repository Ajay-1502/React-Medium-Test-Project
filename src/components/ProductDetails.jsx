const ProductDetails = () => {
  return (
    <div>
      <form>
        <label htmlFor="tshirt">T-Shirt Name :</label>
        <input id="tshirt" type="text" />
        <label htmlFor="description">Description :</label>
        <input id="description" type="text" />
        <label htmlFor="price">Price :</label>
        <input id="price" type="number" min="1" />
        <label htmlFor="L-size">L</label>
        <input id="L-size" min="1" type="number" />
        <label htmlFor="M-size">M</label>
        <input id="M-size" min="1" type="number" />
        <label htmlFor="S-size">S</label>
        <input id="S-size" min="1" type="number" />
        <button>Add Product</button>
      </form>
    </div>
  );
};

export default ProductDetails;
