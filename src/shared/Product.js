import React, { useContext } from "react";
//Helper
import { countQuantity, isInCard, shorten } from "../helpers/helpFunction";

//react-routher-dom
import { Link } from "react-router-dom";

//context
import { CardContext } from "../Context/CartContextProvider";
//css
import styles from "./Product.module.css"
//Icons
import trashIcon from "../../src/assets/trash.svg";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CardContext)
  
  return (
    <div className={styles.container}>
      <img className={styles.cardImage} alt="Product" src={productData.image} style={{ width: "200px" }} />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price}</p>
      <div className={styles.linkContainer}>
        <Link to={`/products/${productData.id}`}>Details{productData.Details}</Link>
        <div className={styles.buttonContainer}>

          {countQuantity(state,productData.id) === 1 && <button className={styles.smallButton}  onClick={()=> dispatch({type:"REMOVE", payload:productData})} ><img src={trashIcon} alt="icone" /></button>}
          {countQuantity(state,productData.id) > 1 && <button className={styles.smallButton} onClick={()=> dispatch({type:"DECREASE", payload:productData})} >-</button>}
          {countQuantity(state, productData.id) > 0 && <span className={styles.counter}>{ countQuantity(state, productData.id)}</span>}

          {isInCard(state, productData.id) ? <button className={styles.smallButton} onClick={() => dispatch({ type: "INCREASE", payload: productData })}>+</button> :
              <button onClick={()=> dispatch({ type: "ADD_ITEM", payload: productData })}>ADD ITEM</button>
          }
        </div>
      </div>
    </div>
  );
};

export default Product;
