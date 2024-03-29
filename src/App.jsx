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
import CartContext from "@/context/CartContext";
import cartItems from "./data/items";
import { cartActions } from '../src/hooks/useShoppingCart';
import reducer from '../src/hooks/useShoppingCart';

const App = () => {
  const [state, dispatch] = reducer();

  const onChangeStep = (num) => {
    dispatch({ type: cartActions.changeStep, payload: { changeStep: num } });
  };

  const onSelectDelivery = (fee) => {
    dispatch({ type: cartActions.selectDelivery, payload: fee });
  };

  return (
    <div className="px-40 min-h-screen">
      <Header />
      <h1 className="my-12 text-[32px] font-bold">結帳</h1>
      <CartContext.Provider value={ state }>
        <StepProgress step={state.step} />
        <div className="flex">
          <div className="flex-grow mr-[8.125rem]">
            {state.step === 1 && <Step1 />}
            {state.step === 2 && <Step2 onSelectDelivery={onSelectDelivery} />}
            {state.step === 3 && <Step3 />}
            <ProgressControl
              step={state.step}
              onChangeStep={onChangeStep} />
          </div>
          <div className="w-2/5">
            <Cart state={state} />
          </div>
        </div>
      </CartContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
