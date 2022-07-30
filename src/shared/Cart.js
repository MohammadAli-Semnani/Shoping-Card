import React, { useContext } from 'react';
//Icone 
import trashIcon from "../assets/trash.svg";

//Context
import { CardContext } from '../Context/CartContextProvider';
//Helpers
import { shorten } from '../helpers/helpFunction';
const Cart = (props) => {
    const { image, price, title, quantity } = props.data;
    const { dispatch } = useContext(CardContext);
    return (
        <div>
            <img src={image} alt="product" />
            <div>
                <h3>{shorten(title)}</h3>
                <p>{ price } $</p>
            </div>
            <div>
            <span>{quantity}</span>
            </div>
            <div>
                {
                    quantity > 1 ?
                        <button onClick={() => dispatch({ type: "DECREASE" , payload:props.data})}>-</button> :
                        <button onClick={() => dispatch({ type: "REMOVE", payload: props.data })}><img src={trashIcon} alt="trashIcone"/></button>
                }
                <button onClick={()=> dispatch({type:"INCREASE", payload:props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;