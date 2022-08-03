import React from "react";

const CartContext = React.createContext({
  step: 1,
  cartItems: [],
});

export default CartContext;
