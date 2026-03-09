import { Outlet } from "react-router-dom";

function ProductsLayout() {
  return (
    <div className="products-layout">
      <div className="products-header">
        <h1>Products</h1>
        <p>Browse all available products below.</p>
      </div>

      <Outlet />
    </div>
  );
}

export default ProductsLayout;