// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "@/App.css";
import StepProgress from "@/components/StepProgress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressControl from "@/components/ProgressControl";
import Cart from "@/components/Cart";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";


const App = () => {
  const [step, setStep] = React.useState(1);

  const PrevStep = () => {
    if (step === 1) return;
    setStep((prev) => prev - 1);
  };

  const NextStep = () => {
    if (step === 3) return;
    setStep((prev) => prev + 1);
  };
  return (
    <div className="px-40 min-h-screen">
      <Header />
      <h1 className="my-12 text-[32px] font-bold">結帳</h1>
      <StepProgress step={step} />
      <div className="flex">
        <div className="flex-grow mr-[8.125rem]">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          <ProgressControl
            step={step}
            atPrevStep={PrevStep}
            atNextStep={NextStep} />
        </div>
        <div className="w-2/5">
          <Cart />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
