// @flow
import './style.css';
import React from 'react'

type StepProgressProps = {
  step: Number,
};

const StepProgress: React.FC<StepProgressProps> = ({ step }) => {
  return (
    <div className="mb-16 flex justify-between items-center w-1/2">
      <div className={`progress-text flex items-center ${step === 1 ? 'active' : 'checked'}`}>
        <span className="circle flex justify-center mr-2 items-center" />
        寄送地址
      </div>
      <div className={`line ${step === 1 ? '' : 'active'}`} />
      <div className={`progress-text flex items-center ${step <= 2 ? 'bg-white text-gray-600' : 'checked'}`}>
        <span className="circle flex justify-center mr-2 items-center" />
        運送方式
      </div>
      <div className={`line ${step <= 2 ? '' : 'active'}`} />
      <div className={`progress-text flex items-center ${step === 3 ? 'bg-white text-gray-600' : ''}`}>
        <span className="circle flex justify-center mr-2 items-center" />
        付款資訊
      </div>
    </div>
  );
};
export default StepProgress;
