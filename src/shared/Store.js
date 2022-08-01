import React, { useContext } from "react";

//Components
import Product from "./Product";
//css
import styles from "./Store.module.css"
//Context
import { ProductsContext } from "../Context/ProductsContextProvider";

const Store = () => {
  const products = useContext(ProductsContext);

  return (
    <div
      className={styles.container}>
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
