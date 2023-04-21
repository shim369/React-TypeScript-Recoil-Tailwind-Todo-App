import { RecoilRoot } from 'recoil'
import AddTask from './components/AddTask'
import InputTask from './components/InputTask'
// import { useState } from 'react'
import './tailwind.css'

function App() {

  return (
    <RecoilRoot>
      <div className="flex flex-col py-10 items-center min-h-screen">
        <InputTask />
        <AddTask />
      </div>
    </RecoilRoot>
  )
}

export default App
