import React, { useContext, useCallback, useState } from 'react';
import CartContext from "../../context/CartContext";
import ListItem from '../Cart/Lineitem';
import { cartActions } from '../../hooks/useShoppingCart';
import reducer from '../../hooks/useShoppingCart';

const Cart = React.memo((props) => {
  const data = useContext(CartContext);
  const deliveryValue = data.deliveryValue;
  const [state, dispatch] = reducer();

  const onChangeQuantity = useCallback((id, num) => {
    dispatch({ type: cartActions.changeQuantity, payload: { id, num } });
  },
    [dispatch]
  );

  const total = deliveryValue + state.cartItems.reduce((prev, cur) => prev + cur.price * cur.quantity, 0);

  const listItem = state.cartItems.map((item) => {
    return (
      <ListItem
        key={item.id}
        id={item.id}
        name={item.name}
        img={item.img}
        price={item.price}
        quantity={item.quantity}
        onChangeQuantity={onChangeQuantity}
      />
    );
  });

  return (
    <div className="container py-8 px-6 border divide-[#f0f0f5] rounded-lg">
      <h2 className="mb-8">購物籃</h2>
      {listItem}
      <div className="pt-5 pb-8 my-4 flex justify-between">
        <span>運費</span>
        <span>$ {deliveryValue}</span>
      </div>
      <div className="my-4 flex justify-between">
        <span>小計</span>
        <span>$ {total}</span>
      </div>
    </div >
  );
});
export default Cart;
