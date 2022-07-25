import React, {  createContext, useReducer } from "react";

const initialState = {
  selectedItem: [],
  itemCounter: 0,
  total: 0,
  checkout: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItem.find((item) => item.id === action.payload.id)) {
        state.selectedItem.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        selectedItem: [...state.selectedItem],
      };
    case "REMOVE":
      const newSelecteditem = state.selectedItem.filter(
        (item) => item.id !== action.payload.id,
      );
      return {
        ...state,
        selectedItem: [...newSelecteditem],
      };
    case "INCREASE":
      const indexI = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.selectedItem[indexI].quantity++;
      return {
        ...state,
      };
    case "DECREASE":
      const indexD = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.selectedItem[indexD].quantity--;
      return {
        ...state,
      };
    case "CHECKOUT":
      return {
        selectedItem: [],
        itemCounter: 0,
        total: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        selectedItem: [],
        itemCounter: 0,
        total: 0,
        checkout: false,
      };
  }
};

export const cardContextProvider = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <cardContextProvider value={{ state, dispatch }}>
      {children}
    </cardContextProvider>
  );
};

export default CartContextProvider;
