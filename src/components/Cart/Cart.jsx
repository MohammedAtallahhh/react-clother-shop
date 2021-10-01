import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";

const Cart = () => {
  let { cart } = useGlobalContext();
  return (
    <div className="cart">
      <div className="container">
        {cart.map((product) => (
          <h1 key={product.id}>{product.title}</h1>
        ))}
      </div>
    </div>
  );
};

export default Cart;
