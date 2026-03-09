import { Link } from "react-router-dom";
import { products } from "../data/products";


function ProductList() {
  return (
    <div className="product-list">
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
            <Link
              to={`/products/${product.id}`}
              className="details-btn"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
