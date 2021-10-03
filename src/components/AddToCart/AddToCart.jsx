import React from "react";
import { ADD_TO_CART } from "../../constants";
import { useGlobalDispatch } from "../../context/GlobalContext";

const AddToCart = ({ className, product, ...props }) => {
  const dispatch = useGlobalDispatch();

  return (
    <button
      className={`btn ${className}`}
      {...props}
      onClick={() => dispatch({ type: ADD_TO_CART, payload: product })}
    >
      {props.children}
    </button>
  );
};

export default AddToCart;
