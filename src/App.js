import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
//components
import Store from "./shared/Store";
import ProductsDatails from "./shared/ProductsDatails";
import Navbar from "./shared/Navbar";

//context
import ProductsContextProvider from "./Context/ProductsContextProvider";
import CartContextProvider from "./Context/CartContextProvider";

const App = () => {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/products/:id" element={<ProductsDatails />} />
          <Route path="/products" element={<Store />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
};

export default App;
