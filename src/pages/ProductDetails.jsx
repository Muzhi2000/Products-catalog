import { useParams, useNavigate, Link } from "react-router-dom";
import { products } from "../data/products";


function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  

  // Convert id to number (important if your ids are numbers)
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="product-details">
        <div className="product-card">
          <h2>Product Not Found</h2>
          <p>The product you are looking for does not exist.</p>
          <Link to="/products" className="product-btn">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-details">
      <div className="product-card">
        <h2>{product.name}</h2>

        <p className="product-info">
          <strong>Price:</strong> ${product.price}
        </p>

        <p className="product-info">
          <strong>Category:</strong> {product.category}
        </p>

        <p className="product-description">
          {product.description}
        </p>

        <button
          className="product-btn"
          onClick={() => navigate(-1)}
        >
          Back to Products
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
