import React, { createContext, useEffect, useState } from "react";
//API
import { GetProducts } from "../services/api";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await GetProducts());
    };

    fetchAPI();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
