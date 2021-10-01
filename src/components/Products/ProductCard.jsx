import React from "react";

import { Link, useRouteMatch } from "react-router-dom";
import { formatPrice } from "../../Helper";
import Button from "../Button/Button";

const ProductCard = ({ product: { id, title, price, img, hoverImg } }) => {
  const changeImg = (e) => {
    const img = e.currentTarget.querySelector(".img");
    const hoverImg = e.currentTarget.querySelector(".hover-img");

    img.style.display = "none";

    hoverImg.style.display = "block";
  };

  const changeImgBack = (e) => {
    const img = e.currentTarget.querySelector(".img");
    const hoverImg = e.currentTarget.querySelector(".hover-img");

    img.style.display = "block";
    hoverImg.style.display = "none";
  };

  const { path } = useRouteMatch();

  // Make the title better as a link
  let formattedTitle = title.replace(" ", "-").toLowerCase();

  // Format price
  price = formatPrice(price);
  return (
    <div className="products__wrapper__product--card">
      {/*-----------
       Router Link 
       ------------*/}
      <Link to={`${path}${formattedTitle}`}>
        <div
          className="product--card__img"
          onMouseOver={changeImg}
          onMouseOut={changeImgBack}
        >
          <img src={img} alt={title} className="img" />

          <img src={hoverImg} alt={title} className="hover-img" />
        </div>
      </Link>
      {/*-----------
       Router Link 
       ------------*/}

      {/* Details */}
      <div className="product--card__details">
        <h3 className="title">{title}</h3>
        <h4 className="price">{price}</h4>
      </div>

      <Button className="product--card__btn">ADD to cart</Button>
    </div>
  );
};

export default ProductCard;
