import React, { useContext, useCallback, useState } from 'react';
import CartContext from "../../context/CartContext";
import ListItem from '../Cart/Lineitem';

const Cart = React.memo((props) => {
  const data = useContext(CartContext);
  const [items, setItems] = useState(data.items);

  const onPlusItem = useCallback((id, quantity) => {
    const newItems = data.cartItems.map((item) => {
      if (item.id === id) return item.quantity += 1
    })
    return setItems(newItems);
  });

  const onMinusItem = useCallback((id, quantity) => {
    const minusItems = data.cartItems.map((item) => {
      if (item.id === id && item.quantity >= 1) {
        return item.quantity -= 1
      }
    })
    return setItems(minusItems);
  });


  const listItem = data.cartItems.map((item) => {
    return (
      <ListItem
        key={item.id}
        id={item.id}
        name={item.name}
        img={item.img}
        price={item.price}
        quantity={item.quantity}
        plusItem={onPlusItem}
        minusItem={onMinusItem}
      />
    );
  });

  return (
    <div className="container py-8 px-6 border divide-[#f0f0f5] rounded-lg">
      <h2 className="mb-8">購物籃</h2>
      {listItem}
      <div className="pt-5 pb-8 my-4 flex justify-between">
        <span>運費</span>
        <span>$ 500</span>
      </div>
      <div className="my-4 flex justify-between">
        <span>小計</span>
        <span>$ 5000</span>
      </div>
    </div >
  );
});
export default Cart;
