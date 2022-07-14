import React, { useState } from 'react'
import './App.css'
import StepProgress from '../src/components/StepProgress';
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import ProgressControl from '../src/components/ProgressControl';
import Cart from '../src/components/Cart';
import Step1 from '../src/components/Step1';
import Step2 from '../src/components/Step2';
import Step3 from '../src/components/Step3';

function App() {

  return (
    <div className="px-40 max-w-[1440px] min-h-screen">
      <Header />
      <h1 className="my-12 text-[32px] font-bold">結帳</h1>
      <StepProgress/>
      <div className="flex">
        <div className="flex-grow mr-[8.125rem]">
          <Step1 />
          <Step2 />
          <Step3 />
          <ProgressControl />
        </div>
        <div className="w-2/5">
          <Cart />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
