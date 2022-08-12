// @flow
import React from 'react';
import cartItems from "../data/items";

const initialState = { step: 1, cartItems, deliveryValue: 0 };

export const cartActions = {
  changeQuantity: "CHANGE_QUANTITY",
  changeStep: "CHANGE_STEP",
  selectDelivery: "SELECT_Delivery",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_QUANTITY":
      const { id, num } = action.payload;
      const newListItems = state.cartItems.map((item) => {
        if (item.id === id && item.quantity + num > 0) {
          return {
            ...item,
            quantity: item.quantity + num,
          };
        }
        return item;
      });
      return { ...state, cartItems: newListItems };
    case "CHANGE_STEP":
      const nextStep = state.step + action.payload.changeStep;
      if (nextStep < 1 || nextStep > 3) return;
      return { ...state, step: state.step + action.payload.changeStep };

    case "SELECT_Delivery":
      return { ...state, deliveryValue: action.payload };

    default:
      return { ...state };
  }
};

export default function useShoppingCart() {
  return React.useReducer(reducer, initialState);
}
