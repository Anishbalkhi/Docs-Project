import React from 'react'
import Background from './Components/background'
import Forground from './Components/forground'

const App = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-800 '>
     <Background />
     <Forground />
     
    </div>
  )
}

export default App
