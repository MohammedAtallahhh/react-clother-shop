import React from "react";
import { useParams } from "react-router";
// import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import { formatPrice } from "../../Helper";
import AddToCart from "../AddToCart/AddToCart";
import "./ProductPage.css";

const ProductPage = () => {
  const { productTitle } = useParams();
  // const { url } = useRouteMatch();
  const { products } = useGlobalContext();

  const product = products.find(
    (p) => p.title.replace(" ", "-").toLowerCase() === productTitle
  );

  if (!product) return <h1>Error 404..</h1>;

  let { title, info, price, img } = product;

  console.log("Reached");
  price = formatPrice(price);

  return (
    <div className="product__page--product">
      <div className="product__media">
        {/* Product Media */}
        <div className="product__media--img">
          <img src={img} alt={title} />
        </div>
      </div>

      <div className="product__text">
        <header className="product__text--header">
          <h2 className="title">{title}</h2>

          <h3 className="price">{price}</h3>
        </header>

        <div className="product__text--details">
          <span>Info</span>
          <p>{info}</p>
        </div>

        <footer className="product__footer">
          <AddToCart className="product__footer--btn">ADD to cart</AddToCart>
        </footer>
      </div>
    </div>
  );
};

export default ProductPage;
