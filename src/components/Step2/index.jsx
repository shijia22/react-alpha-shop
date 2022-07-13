import { React } from 'react';

const Step2 = () => {
  return (
    <div>
      <h2 class="mb-8">運送方式</h2>
      <form class="mb-36">
      <div
          class="p-5 mb-6 flex items-center border border-[#f0f0f5] rounded focus:border-[#2a2a2a] hover:border-[#2a2a2a]">
        <input
          type="radio" class="mr-5 w-[20px] h-[20px] opacity-100"/>
        <div class="flex-grow">
          <div class="flex justify-between">
            <span>標準運送</span>
              <span class="text-xs leading-4">免費</span>
          </div>
            <span class="text-xs leading-4">約 3~7 個工作天</span>
        </div>
      </div>
        <div
          class="p-5 mb-6 flex items-center border border-[#f0f0f5] rounded focus:border-[#2a2a2a] hover:border-[#2a2a2a]">
          <input
            type="radio" class="mr-5 w-[20px] h-[20px] opacity-100" />
          <div class="flex-grow">
            <div class="flex justify-between">
              <span>DHL 貨運</span>
              <span class="text-xs leading-4">$ 500</span>
            </div>
            <span class="text-xs leading-4">48 小時內送達</span>
          </div>
        </div>
    </form>
  </div>
  );
};
export default Step2;
