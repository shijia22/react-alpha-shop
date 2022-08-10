import  React  from 'react';

const Step3 = () => {
  return (
    <div>
      <h2 className="mb-8 font-bold text-2xl">付款資訊</h2>
      <form className="w-full mb-12 grid gap-y-6 auto-rows-[minmax(4rem, auto)]">
        <div className="grid grid-cols-3 gap-x-7">
          <div className="col-span-2 flex flex-col items-stretch">
            <label htmlFor="cc-name">持卡人姓名</label>
            <input
              type="text"
              placeholder="John Doe"
              className="py-3 pl-4 border border-grey-300 rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-7">
          <div className="col-span-2 flex flex-col items-stretch">
            <label htmlFor="cc-number">卡號</label>
            <input
              type="text"
              placeholder="1111 2222 3333 4444"
              className="py-3 pl-4 border border-grey-300 rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-7">
          <div className="flex flex-col items-stretch col-span-2">
            <label htmlFor="cc-exp">有效期限</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="py-3 pl-4 border border-grey-300 rounded"
            />
          </div>
          <div className="flex flex-col items-stretch col-span-2">
            <label htmlFor="cc-csc">CVC/CCV</label>
            <input type="text" placeholder="123" className="py-3 pl-4 border border-grey-300 rounded" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Step3;
