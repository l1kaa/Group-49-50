import { useState } from 'react'
import './App.css'

function App() {
  let [state, stateChange] = useState('')

  function displayName(){
    stateChange('Lika Chkhikvadze')
  }

  return (
    <div className='w-full'>
      <button onClick={displayName} className='text-5xl border-2 px-4'>Click</button>
      <p className='text-6xl'>{state}</p>
      {console.log(useState)}
    </div>
  )
}

export default App
