import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../Context/ProductsContextProvider";

const ProductsDatails = () => {
  const params = useParams();
  const id = params.id;
  const data = useContext(ProductsContext);
  const product = data[id - 1];
  const { image, title, description, price, category } = product;
  return (
    <div>
      <img src={image} alt="product" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{category}</p>
        <div>
          <span>{price}</span>
          <Link to={"/products"}>Back To Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsDatails;
