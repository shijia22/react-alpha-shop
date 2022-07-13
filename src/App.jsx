import React, { useState } from 'react'
import './App.css'
import StepProgress from '../src/components/StepProgress';
import Header from '../src/components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <Header/>
      <header className="min-h-screen text-white flex flex-col justify-center items-center">
        <StepProgress />
      </header>
    </div>
  )
}

export default App
