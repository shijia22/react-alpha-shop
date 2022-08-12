import React from "react";

const CartContext = React.createContext({
  step: 1,
  cartItems: [],
  deliveryValue: 0,
});

export default CartContext;
