import React, { useContext } from "react";

//Router
import { Link } from "react-router-dom";
//Components
import Cart from "./Cart";

//Context
import { CardContext } from "../Context/CartContextProvider";
//css
import styles from "./ShopCart.module.css"
const ShopCarts = () => {
  const { state, dispatch } = useContext(CardContext);
  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItem.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      {state.itemCounter > 0 && (
        <div className={styles.payments}>
          <p>
            <span>Total Item : </span> {state.itemCounter}
          </p>
          <p>
            <span>Total Payments : </span> {state.total}
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.clear} onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
            <button className={styles.checkout} onClick={() => dispatch({ type: "CHECKOUT" })}> Checkout</button>
          </div>
        </div>
      )}
      {!state.checkout && state.itemCounter === 0 && (
        <div className={styles.complete}>
          <h3>want to buy !?</h3>
          <Link to="/products">Go to shop</Link>
        </div>
      )}
      {state.checkout && (
        <div className={styles.complete}>
          <h3>checked out seccessfully</h3>
          <Link to="/products">Buy More</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCarts;
