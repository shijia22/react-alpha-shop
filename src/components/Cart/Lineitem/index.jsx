import { React } from 'react';

const LineItem = () => {
  return (
    <>
      <div className="mb-8 flex justify-between">
        <img alt="" src='https://fakeimg.pl/300x300/' className='w-[100px] h-[100px]' />
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
      <div className="mb-8 flex justify-between">
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
    </>
  );
};
export default LineItem;
