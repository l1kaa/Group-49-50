import React from 'react'
import { useState } from 'react'
// import './App.css'

function App() {
  let [state, stateChange] = useState(0)

  function plus(){
    stateChange(state+1)
  }

    function minus(){
    stateChange(state-1)
  }

  function reset(){
    stateChange(0)
  }

  function colorChange(){
    if(state > 0){
      return 'text-green-600'
    } else if(state < 0){
      return 'text-red-600'
    } else{
      return 'text-blue-300'
    }
  }



  return (
    <div className="flex flex-col items-center gap-5 mt-10 ml-10 w-full border-b-blue-950" >
      <p className={`text-9xl mb-8 ${colorChange()} `}>{state}</p>
      <div className="flex gap-4">
        <button onClick={minus} className="bg-gray-800 text-white px-6 py-2 rounded-xl text-3xl">-</button>
        <button onClick={plus}  className="bg-gray-800 text-white px-6 py-2 rounded-xl text-3xl">+</button>
        <button onClick={reset} className="bg-blue-600 text-white px-6 py-2 rounded-xl text-3xl">reset</button>
      </div>
      
    </div>
  )
}

export default App
