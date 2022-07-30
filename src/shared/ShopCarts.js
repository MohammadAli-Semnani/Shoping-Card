import React, { useContext } from "react";


//Router
import {Link} from "react-router-dom"
//Components
import Cart from "./Cart";

//Context
import { CardContext } from "../Context/CartContextProvider";

const ShopCarts = () => {
  const { state,dispatch } = useContext(CardContext);
  return (
    <div>
      <div>
        {state.selectedItem.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      {state.itemCounter > 0 && (
        <div>
          <p>
            <span>Total Item : </span> {state.itemCounter}
          </p>
          <p>
            <span>Total Payments : </span> {state.total}
          </p>
          <div>
            <button onClick={() => dispatch({ type: "CHECKOUT" })}>
              Checkout
            </button>
            <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
          </div>
        </div>
      )}
      {state.checkout && 
        <div>
          <h3>checked out seccessfully</h3>
          <Link to="/products">Buy More</Link>
        </div>
          }
          
          {!state.checkout && state.itemCounter === 0 && 
        <div>
          <h3>want to buy</h3>
          <Link to="/products">Go to shop</Link>
        </div>
      }
    </div>
  );
};

export default ShopCarts;
