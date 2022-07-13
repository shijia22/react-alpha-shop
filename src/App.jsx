import React, { useState } from 'react'
import './App.css'
import StepProgress from '../src/components/StepProgress';
import Header from '../src/components/Header'
import ProgressControl from '../src/components/ProgressControl';

function App() {

  return (
    <div classNameName="px-40 max-w-[1440px] min-h-screen">
      <Header />
      <h1 classNameName="mb-12">結帳</h1>
      <div className="flex">
        <div className="flex-grow mr-[8.125rem]">
        </div>
        <div className="w-2/5">
          <ProgressControl />
        </div>
      </div>
      <StepProgress />
    </div>
  )
}

export default App
