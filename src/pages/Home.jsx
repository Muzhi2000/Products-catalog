import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to Our Store</h1>
        <p>Browse our collection of high-quality products.</p>

        <Link to="/products" className="home-btn">
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default Home;
