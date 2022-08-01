import React, { useContext } from 'react';
import { CardContext } from '../Context/CartContextProvider';
//css
import styles from "./Navbar.module.css"
//Icons
import shopIcon from "../assets/shopIcon.svg";
import { Link } from 'react-router-dom';
//Context
const Navbar = () => {

  const { state } = useContext(CardContext)
  
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to="/products">
          Products
        </Link>
        <div className={styles.iconContainer}>
          <Link to="/cart">
            <img alt="icon" src={shopIcon}  />
          </Link>

          <span>{state.itemCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;