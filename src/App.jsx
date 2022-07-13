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
      <div className="flex flex-col">
      <StepProgress />
        <div className="flex-grow mr-[8.125rem]">
          <ProgressControl />
        </div>
        <div className="w-2/5">
        </div>
      </div>
    </div>
  )
}

export default App
