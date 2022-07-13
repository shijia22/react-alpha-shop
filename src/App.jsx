import React, { useState } from 'react'
import './App.css'
import StepProgress from '../src/components/StepProgress';
import Header from '../src/components/Header'
import ProgressControl from '../src/components/ProgressControl';
import Cart from '../src/components/Cart';
import Step1 from '../src/components/Step1';

function App() {

  return (
    <div className="px-40 max-w-[1440px] min-h-screen">
      <Header />
      <h1 className="mb-12">結帳</h1>
      <StepProgress/>
      <div className="flex">
        <div className="flex-grow mr-[8.125rem]">
          <Step1 />
          <ProgressControl />
        </div>
        <div className="w-2/5">
          <Cart />
        </div>
      </div>
    </div>
  )
}

export default App
