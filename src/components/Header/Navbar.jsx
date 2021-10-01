import React from "react";
import "./Navbar.css";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="header__nav">
      <div className="container">
        <div className="header__nav--logo">
          <Link to="/" className="asdad">
            <h1 className="logo">Clother.</h1>
          </Link>
        </div>

        <ul className="header__nav--list">
          <li className="header__nav--list__item">
            <Link to="/cart" className="header__nav--list__link">
              <FiShoppingCart />
              <span className="cart--badge">3</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
