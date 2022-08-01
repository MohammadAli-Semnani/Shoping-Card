import React, { useContext } from 'react';
//Icone 
import trashIcon from "../assets/trash.svg";

//css
import styles from "./Cart.module.css"

//Context
import { CardContext } from '../Context/CartContextProvider';


//Helpers
import { shorten } from '../helpers/helpFunction';


const Cart = (props) => {

    const { image, price, title, quantity } = props.data;
    const { dispatch } = useContext(CardContext);

    return (
      <div className={styles.container}>
        <img className={styles.productImage} src={image} alt="product" />
        <div  className={styles.data}>
              <h3>{shorten(title)}</h3>
              <p>{price}$</p>
        </div>
        <div>
          <span  className={styles.quantity}>{quantity}</span>
        </div>
        <div className={styles.buttonContainer}>
          {quantity > 1 ? (
            <button
              onClick={() =>
                dispatch({ type: "DECREASE", payload: props.data })}>-</button>) : 
            <button onClick={() => dispatch({ type: "REMOVE", payload: props.data })}><img src={trashIcon} alt="trashIcone" /></button>}
            <button onClick={() => dispatch({ type: "INCREASE", payload: props.data })}>+</button>
        </div>
      </div>
    );
};

export default Cart;