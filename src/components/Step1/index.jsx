import { React } from 'react';

const Step1 = () => {
  return (
    <div>
      <h2 className="mb-8 font-bold text-2xl">寄送地址</h2>
      <form className="w-full mb-12 grid gap-y-6 auto-rows-[minmax(4rem, auto)]">
        <div className="grid grid-cols-3 gap-x-7">
          <div className="col-span-1 flex flex-col items-stretch">
            <label htmlFor="gender">稱謂</label>
            <select name="gender" className="py-3 pl-4 border border-grey-300 rounded">
              <option value="mr">先生</option>
              <option value="ms">女士</option>
            </select>
          </div>
          <div className="col-span-2 flex flex-col items-stretch">
            <label htmlFor="name">姓名</label>
            <input type="text" placeholder="請輸入姓名" className="py-3 pl-4 border border-grey-300 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-7">
          <div className="flex flex-col items-stretch col-span-2">
            <label htmlFor="phone">電話</label>
            <input type="text" placeholder="請輸入行動電話" className="py-3 pl-4 border border-grey-300 rounded" />
          </div>
          <div className="flex flex-col items-stretch col-span-2">
            <label htmlFor="mail">Email</label>
            <input type="text" placeholder="請輸入電子郵件" className="py-3 pl-4 border border-grey-300 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-7">
          <div className="flex flex-col items-stretch col-span-1">
            <label htmlFor="city">縣市</label>
            <select name="city" className="py-3 pl-4 border border-grey-300 rounded">
              <option value="">請選擇縣市</option>
              <option value="TPE">臺北市</option>
              <option value="TPH">新北市</option>
            </select>
          </div>
          <div className="flex flex-col items-stretch col-span-2">
            <label htmlFor="address">地址</label>
            <input type="text" placeholder="請輸入地址" className="py-3 pl-4 border border-grey-300 rounded" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Step1;
