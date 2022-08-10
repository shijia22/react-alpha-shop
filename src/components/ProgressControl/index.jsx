// @flow
import  React  from 'react';

type ProgressControlProps = {
  step: Number,
  PrevStep: Function,
  NextStep: Function,
};

const ProgressControl: React.FC<ProgressControlProps> = ({
  step,
  atPrevStep,
  atNextStep,
}) => {
  return (
    <div className="pt-6 flex justify-between border-t">
      <button
        className={`back flex items-center py-4 px-8 ${step !== 1 ? 'visible' : 'invisible'}`} onClick={atPrevStep}>
        {step !== 1 && <img src="../images/left.png" alt="" className="w-6 h-6 mr-3" />}
        上一步</button>
      <button
        className={`flex items-center py-4 px-8 rounded-lg bg-secondary text-white ${step !== 3 ? 'visible' : 'invisible'}`} onClick={atNextStep}>
        下一步
        {step !== 3 && <img src="../images/right.png" alt="" className="w-6 h-6 mr-3" />}
      </button>
      <button
        className={`flex items-center py-4 px-8 rounded-lg bg-secondary text-white ${step !== 3 ? 'hidden' : ''}`}>
        確認訂單
      </button>
    </div>
  );
};
export default ProgressControl;
