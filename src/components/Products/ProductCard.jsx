import React from "react";

const ProductCard = ({ product: { title, price, img, hoverImg } }) => {
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
  return (
    <div className="products__wrapper__product--card">
      {/* image  */}
      <div
        className="product--card__img"
        onMouseOver={changeImg}
        onMouseOut={changeImgBack}
      >
        <img src={img} alt={title} className="img" />

        <img src={hoverImg} alt={title} className="hover-img" />
      </div>

      {/* Details */}

      <div className="product--card__details">
        <h3 className="title">{title}</h3>
        <h4 className="price">${price}</h4>
      </div>

      <button className="btn product--card__btn">ADD to cart</button>
    </div>
  );
};

export default ProductCard;
