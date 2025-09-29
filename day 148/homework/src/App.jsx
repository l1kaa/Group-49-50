import { useState } from 'react'
import './App.css'

function App() {
  let [state, stateChange] = useState(2)

  function double(){
    stateChange(state * 2)
  }



  return (
    <div className="w-full">
      <p className='text-10xl'>{state}</p>
      <button onClick={double} className='border-b-blue-950'>Double</button>
    </div>
  )
}

export default App
