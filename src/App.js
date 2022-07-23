import React from 'react';

import ProductsContextProvider from './Context/ProductsContextProvider';
import { Route, Routes , Navigate} from 'react-router-dom';
import Store from './shared/Store';
import ProductsDatails from './shared/ProductsDatails';
const App = () => {
  return (
    <ProductsContextProvider>
      <Routes>
        <Route path="/products/:id" element={<ProductsDatails/>} />
        <Route path="/products" element={<Store/>} />
        <Route path="/*" element={<Navigate to="/products" />} />
      </Routes>
    </ProductsContextProvider>
  );
};

export default App;