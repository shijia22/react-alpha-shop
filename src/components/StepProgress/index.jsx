import './style.css';
import { React } from 'react';

const StepProgress = () => {
  return (
  <div className="mb-16 flex justify-between items-center w-1/2">
    <div className="progress-text flex items-center">
      <span className="circle flex justify-center mr-2 items-center checked"
        ></span>
      寄送地址
    </div>
    <div className="line"></div>
    <div className="progress-text flex items-center">
      <span className="circle flex justify-center mr-2 items-center"
        ></span>
      運送方式
    </div>
    <div className="line"></div>
    <div className="progress-text flex items-center">
      <span className="circle flex justify-center mr-2 items-center"></span>
      付款資訊
    </div>
  </div>
  );
};
export default StepProgress;
