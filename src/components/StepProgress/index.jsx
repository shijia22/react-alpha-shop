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
        <span className={`circle flex justify-center mr-2 items-center ${step === 1 ? 'active' : 'checked'}`} />
        寄送地址
      </div>
      <div className="line active" />
      <div className={`progress-text flex items-center ${step === 1 ? '' : 'active'}  ${step === 3 ? 'checked' : ''}`}>
        <span className={`circle flex justify-center mr-2 items-center ${step <= 2 ? 'active' : 'checked'}`} />
        運送方式
      </div>
      <div className={`line ${step >= 2 ? 'active' : ''}`} />
      <div className={`progress-text flex items-center ${step === 3 ? 'active' : ''}`}>
        <span className="circle flex justify-center mr-2 items-center" />
        付款資訊
      </div>
    </div>
  );
};
export default StepProgress;
