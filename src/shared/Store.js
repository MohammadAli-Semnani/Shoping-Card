import React, { useContext } from "react";

//Components
import Product from "./Product";

//Context
import { ProductsContext } from "../Context/ProductsContextProvider";

const Store = () => {
  const products = useContext(ProductsContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}>
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
