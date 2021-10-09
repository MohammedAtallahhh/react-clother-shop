import React from "react";
import {
  useGlobalContext,
  useGlobalDispatch,
} from "../../context/GlobalContext";
import {
  DECREASE_AMOUNT,
  INCREASE_AMOUNT,
  REMOVE_FROM_CART,
} from "../../constants";

import "./Cart.css";
import { formatPrice } from "../../Helper";

const Cart = () => {
  const { cart } = useGlobalContext();
  const dispatch = useGlobalDispatch();
  let totalPrice = formatPrice(
    cart.reduce((acc, cur) => acc + cur.price * cur.amount, 0)
  );
  return (
    <>
      {cart.length > 0 ? (
        <div className="cart">
          <div className="container">
            <div className="cart__items--wrapper">
              {/* MAPING THROUGH CART ITEMS */}
              {cart.map(({ id, title, amount, img, info, price }) => (
                <div className="cart__item" key={id}>
                  <div className="cart__item--img">
                    <img src={img} alt={title} />
                  </div>

                  <div className="cart__item--info">
                    {/* Header  */}
                    <header>
                      <h2>{title}</h2>
                      <h3>{formatPrice(price)}</h3>
                    </header>

                    {/* Body  */}
                    <main className="cart__item--body">
                      <p>{info}</p>
                    </main>

                    {/* Control Amount  */}
                    <div className="control-amount">
                      <h6 className="label">amount</h6>
                      <button
                        className="incease"
                        onClick={() =>
                          dispatch({ type: INCREASE_AMOUNT, payload: id })
                        }
                      >
                        +
                      </button>
                      <div className="amount">{amount}</div>
                      <button
                        className="decrease"
                        onClick={() =>
                          dispatch({ type: DECREASE_AMOUNT, payload: id })
                        }
                        disabled={amount < 2}
                      >
                        -
                      </button>
                    </div>

                    {/* Footer  */}
                    <footer className="cart__item--footer">
                      <button
                        className="btn-remove"
                        onClick={() =>
                          dispatch({ type: REMOVE_FROM_CART, payload: id })
                        }
                      >
                        Remove item
                      </button>
                    </footer>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart__checkout">
              <h2 className="cart__checkout--title">Checkout.</h2>
              <h3 className="cart__checkout--total">Total: {totalPrice}</h3>
              <button className="btn">Checkout</button>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="cart__backup">
          No Items just yet, Add some products..! 😄
        </h2>
      )}
    </>
  );
};

export default Cart;
