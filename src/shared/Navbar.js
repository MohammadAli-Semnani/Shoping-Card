import React, { useContext } from 'react';
import { CardContext } from '../Context/CartContextProvider';

//Icons
import shopIcon from "../assets/shopIcon.svg"
import { Link } from 'react-router-dom';
//Context
const Navbar = () => {
    const {state} = useContext(CardContext)
    return (
      <div>
        <div>
          <Link to="/products">
            <img alt='icon' src={shopIcon} style={{ width: "20px" }} />
          </Link>

          <span>{state.itemCounter}</span>
        </div>
      </div>
    );
};

export default Navbar;