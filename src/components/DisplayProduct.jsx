const DisplayProduct = (props) => {
  return (
    <div>
      {props.products.map((product) => {
        return (
          <ul key={product.id}>
            {product.name} - {product.description} -₹{product.price}
            <button>Buy Large {product.lSize}</button>
            <button>Buy Medium {product.mSize}</button>
            <button> Buy Small {product.sSize}</button>
          </ul>
        );
      })}
    </div>
  );
};

export default DisplayProduct;
