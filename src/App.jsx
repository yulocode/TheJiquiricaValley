import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Gaara from './assets/gaara-naruto.gif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={Gaara} className="logo" alt="Gaara GIF" />
      </div>
      <h1>FARMADOR DE AURA</h1>
      <div>
        <p> <b> FARM AURA</b></p>
        <button onClick={() => setCount((count) => count + 1)}>
          ☠️ {count} ☠️
        </button>
      </div>
    </>
  )
}

export default App
