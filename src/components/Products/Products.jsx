import React from "react";
import ProductCard from "./ProductCard";
import {
  useGlobalContext,
  // useGlobalDispatch,
} from "../../context/GlobalContext";
import "./Products.css";

const Products = () => {
  const { products } = useGlobalContext();

  // const dispatch = useGlobalDispatch();

  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">Featured products.</h2>

        <div className="products__wrapper">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
