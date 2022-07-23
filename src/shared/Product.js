import React from "react";
//Helper
import { shorten } from "../helpers/ShortNameFunction";
import {Link} from "react-router-dom"

const Product = ({ productData }) => {
  return (
    <div>
      <img alt="Product" src={productData.image} style={{ width: "200px" }} />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>
      <div>
        <Link to={`/products/${productData.id}`}>Details{productData.Details}</Link>
        <div>
          <button>Add to the card</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
