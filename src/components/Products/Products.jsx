import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import ProductCard from "./ProductCard";
import {
  useGlobalContext,
  // useGlobalDispatch,
} from "../../context/GlobalContext";
import ProductPage from "./ProductPage";
import "./Products.css";

const Products = () => {
  const { products } = useGlobalContext();

  // const dispatch = useGlobalDispatch();
  const { path } = useRouteMatch();

  return (
    <section className="products">
      <div className="container">
        <Switch>
          <Route exact path={path}>
            <h2 className="products__title">Featured products.</h2>

            <div className="products__wrapper">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </Route>

          <Route path={`${path}:productTitle`}>
            <ProductPage />
          </Route>
        </Switch>
      </div>
    </section>
  );
};

export default Products;
