import { useState } from 'react'
import './App.css'

function App() {
  let [state, stateChange] = useState(2)

  function double(){
    stateChange(state * 2)
  }



  return (
    <div className="w-full">
      <button onClick={double}>MyForm</button>
      <p>{state}</p>
    </div>
  )
}

export default App
