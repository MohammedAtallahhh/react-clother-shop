import React from "react";
import { useParams } from "react-router";
// import { Link } from "react-router-dom";
// import { useGlobalContext } from "../../context/GlobalContext";

const ProductPage = () => {
  const { productTitle } = useParams();
  // const { url } = useRouteMatch();
  // const { products } = useGlobalContext();

  // const { id, title, amount, price, info } = products.find(
  //   (p) => p.title === productTitle
  // );

  return (
    <>
      <h1>{productTitle}</h1>
    </>
  );
};

export default ProductPage;
