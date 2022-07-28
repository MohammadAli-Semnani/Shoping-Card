import React, { useContext } from "react";
//Helper
import { countQuantity, isInCard, shorten } from "../helpers/helpFunction";

//react-routher-dom
import { Link } from "react-router-dom";

//context
import { CardContext } from "../Context/CartContextProvider";

//Icons
import trashIcon from "../../src/assets/trash.svg";

const Product = ({ productData }) => {
const {state, dispatch} = useContext(CardContext)
  return (
    <div>
      <img alt="Product" src={productData.image} style={{ width: "200px" }} />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>
      <div>
        <Link to={`/products/${productData.id}`}>
          Details{productData.Details}
        </Link>
        <div>
          {
            isInCard(state, productData.id) ? <button onClick={() => dispatch({ type: "INCREASE", payload: productData })}>+</button> :
              <button onClick={()=> dispatch({ type: "ADD_ITEM", payload: productData })}>ADD ITEM</button>
          }
          {
            countQuantity(state,productData.id) === 1 && <button onClick={()=> dispatch({type:"REMOVE", payload:productData})} ><img src={trashIcon} alt="icone" /></button>
          }
          {
            countQuantity(state,productData.id) > 1 && <button onClick={()=> dispatch({type:"DECREASE", payload:productData})} >-</button>
          }
        </div>
      </div>
    </div>
  );
};

export default Product;
