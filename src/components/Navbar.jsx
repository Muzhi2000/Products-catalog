import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">MyStore</h1>

        <div className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink 
            to="/products" 
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Products
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
