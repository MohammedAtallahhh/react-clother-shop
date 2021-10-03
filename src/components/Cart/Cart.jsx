import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";

import "./Cart.css";

const Cart = () => {
  const { cart } = useGlobalContext();
  return (
    <div className="cart">
      <div className="container">
        {cart.map(({ id, title, amount, img, info }) => (
          <div className="cart__item" key={id}>
            <div className="cart__item--img">
              <img src={img} alt={title} />
            </div>

            <div className="cart__item--info">
              {/* Header  */}
              <header>
                <h2>{title}</h2>
              </header>

              {/* Body  */}
              <main className="cart__item--body">
                <p>{info}</p>
              </main>

              {/* Control Amount  */}
              <div className="control-amount">
                <h6 className="label">amount</h6>
                <button className="incease">+</button>
                <div className="amount">{amount}</div>
                <button className="decrease">-</button>
              </div>

              {/* Footer  */}
              <footer className="cart__item--footer">
                <button className="btn-remove">Remove item</button>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
