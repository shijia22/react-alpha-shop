import { React } from 'react';

const Step2 = () => {
  return (
    <div>
      <h2 className="mb-8 font-bold text-2xl">運送方式</h2>
      <form className="mb-36">
      <div
          className="p-5 mb-6 flex items-center border border-[#f0f0f5] rounded focus:border-[#2a2a2a] hover:border-[#2a2a2a]">
        <input
          type="radio" className="mr-5 w-[20px] h-[20px] opacity-100"/>
        <div className="flex-grow">
          <div className="flex justify-between">
            <span>標準運送</span>
              <span className="text-xs leading-4">免費</span>
          </div>
            <span className="text-xs leading-4">約 3~7 個工作天</span>
        </div>
      </div>
        <div
          className="p-5 mb-6 flex items-center border border-[#f0f0f5] rounded focus:border-[#2a2a2a] hover:border-[#2a2a2a]">
          <input
            type="radio" className="mr-5 w-[20px] h-[20px] opacity-100" />
          <div className="flex-grow">
            <div className="flex justify-between">
              <span>DHL 貨運</span>
              <span className="text-xs leading-4">$ 500</span>
            </div>
            <span className="text-xs leading-4">48 小時內送達</span>
          </div>
        </div>
    </form>
  </div>
  );
};
export default Step2;
