import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = ({ searchTerm, setSearchTerm, handleSearch }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <header className="header">
      <Link to="/" className="logo">ShoppyGlobe</Link>

      <div className="navbar-right">
        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart" className="cart-link">
            Cart
            {cartItems.length > 0 && (
              <span className="cart-indicator">{cartItems.length}</span>
            )}
          </NavLink>
          <NavLink to="/checkout">Checkout</NavLink>
        </nav>

        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
