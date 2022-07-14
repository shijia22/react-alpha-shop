import { React } from 'react';

const ProgressControl = () => {
  return (
    <div className="pt-6 flex justify-between border-t">
      <button
        className="back flex items-center py-4 px-8">
        {/* <img src="../images/left.png" alt="" className="w-6 h-6 mr-3" /> */}
        上一步</button>
      <button
        className="flex items-center py-4 px-8 rounded-lg bg-[#f67599] text-white">
        下一步
        {/* <img src="../images/right.png" alt="" className="w-6 h-6 mr-3" /> */}
      </button>
      {/* <button className="flex items-center py-4 px-8 rounded-lg bg-[#f67599]">確認訂單</button> */}
    </div>
  );
};
export default ProgressControl;
