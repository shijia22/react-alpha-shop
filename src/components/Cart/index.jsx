import { React } from 'react';
import LineItem from '../Cart/LineItem';

const Cart = () => {
  return (
    <div className="container py-8 px-6 border divide-[#f0f0f5] rounded-lg">
      <h2 className="mb-8">購物籃</h2>
      <LineItem />
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
};
export default Cart;
