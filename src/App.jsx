import React, { useState } from 'react'
import './App.css'
import StepProgress from '../src/components/StepProgress';
import Header from '../src/components/Header'
import ProgressControl from '../src/components/ProgressControl';
import Cart from '../src/components/Cart';

function App() {

  return (
    <div classNameName="px-40 max-w-[1440px] min-h-screen">
      <Header />
      <h1 classNameName="mb-12">結帳</h1>
      <StepProgress/>
      <div className="flex">
        <div className="flex-grow mr-[8.125rem]">
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
