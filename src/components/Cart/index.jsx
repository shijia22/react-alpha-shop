import { React } from 'react';

const Cart = () => {
  return (
    <div className="container py-8 px-6 border divide-[#f0f0f5] rounded-lg">
      <h2 className="mb-8">購物籃</h2>
      <div
        className="mb-8 flex justify-between">
        <img alt="" src='https://fakeimg.pl/300x300/' className='w-[100px] h-[100px]'/>
        <div className="items-center min-w-[100px]">
          <span>貓貓罐罐</span>
          <div className="flex justify-between mt-4">
            <button className="w-6 h-6 rounded-3xl bg-[#f0f0f5]">-</button>
            <span>12</span>
            <button className="w-6 h-6 rounded-3xl bg-[#f0f0f5]">+</button>
          </div>
        </div >
        <div>$ 1000</div>
      </div>
      <div
        className="mb-8 flex justify-between">
        <img alt="" src='https://fakeimg.pl/300x300/' className='w-[100px] h-[100px]' />
        <div className="items-center min-w-[100px]">
          <span>貓貓肉乾</span>
          <div className="flex justify-between mt-4">
            <button className="w-6 h-6 rounded-3xl bg-[#f0f0f5]">-</button>
            <span>2</span>
            <button className="w-6 h-6 rounded-3xl bg-[#f0f0f5]">+</button>
          </div>
        </div >
        <div>$ 800</div>
      </div>
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
