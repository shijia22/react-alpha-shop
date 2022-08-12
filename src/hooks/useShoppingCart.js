// @flow
import React from 'react';
import { cartItems } from "../data/items";
import { type Action } from '../hooks/actions';

const initialState: State = {
  listItems: [],
  totalAmount: 0,
  delivery: {
    id: '',
    item: '',
    price: '',
    days: ''
  },
};

const calcTotalAmount = (listItems: ListItems[], delivery: Delivery): State => {
  const result = listItems.reduce((total, currentItem) => {
    return total + currentItem.price * currentItem.quantity;
  }, 0);

  if (delivery.price === '') {
    return result;
  }
  return result + delivery.price;
};

initialState.totalAmount = calcTotalAmount(
  initialState.listItems,
  initialState.delivery,
);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      const { listItems, delivery } = state;
      const newListItems = listItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      })
    }

    case 'REMOVE_QUANTITY': {
      const { payload } = action;
      const { listItems, delivery } = state;
      const newListItems = listItems.filter((item) => item.id !== payload);
      return {
        ...state,
        listItems: newListItems,
        totalAmount: calcTotalAmount(newListItems, delivery),
      };
    }
    case 'CHANGE_DELIVERY': {
      const selectDelivery = action.payload;
      return {
        ...state,
        delivery: selectDelivery,
        totalAmount: calcTotalAmount(state.listItems, selectDelivery),
      };
    }
    default:
      return state;
  }
};

export default function useShoppingCart() {
  return React.useReducer(reducer, initialState);
}
