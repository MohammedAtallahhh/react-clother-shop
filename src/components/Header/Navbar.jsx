import React from "react";
import "./Navbar.css";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";

const Navbar = () => {
  const { cart } = useGlobalContext();
  let amount = cart.reduce((acc, cur) => acc + cur.amount || 0, 0);
  return (
    <nav className="header__nav">
      <div className="container">
        <div className="header__nav--logo">
          <Link to="/" className="logo">
            <h1 className="logo">Clother.</h1>
          </Link>
        </div>

        <ul className="header__nav--list">
          <li className="header__nav--list__item">
            <Link to="/cart" className="header__nav--list__link">
              <FiShoppingCart />
              {cart.length ? (
                <span className="cart--badge">{amount}</span>
              ) : null}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
