
// @flow
import React, { useCallback }  from 'react';
import CartContext from "../../context/CartContext";

const Step2 = (props) => {
  const { onSelectDelivery } = props;

  const deliveryItems = [
    {
      id: '1',
      item: '標準運送',
      price: '免費',
      value: 0,
      days: '約 3~7 個工作天'
    },
    {
      id: '2',
      item: 'DHL 貨運',
      price: `$ ${500}`,
      value: 500,
      days: '48 小時內送達'
    }
  ]
  return (
    <div>
      <h2 className="mb-8 font-bold text-2xl">運送方式</h2>
      <form className="mb-36">
        {deliveryItems.map((item) => (<div key={item.id} className="p-5 mb-6 flex items-center border border-[#f0f0f5] rounded focus:border-grey-500 hover:border-grey-500">
          <input
            onChange={() => { onSelectDelivery(item.value); }} type="radio" className="mr-5 w-[20px] h-[20px] opacity-100" />
          <div className="flex-grow">
            <div className="flex justify-between">
              <span>{item.item}</span>
              <span className="text-xs leading-4">{item.price}</span>
            </div>
            <span className="text-xs leading-4">{item.days}</span>
          </div>
        </div>))}
      </form>
    </div>
  );
};
export default Step2;


