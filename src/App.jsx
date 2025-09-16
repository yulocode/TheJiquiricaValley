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
      <h1>Folha do Careca</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          FARMADOR DE AURA {count}
        </button>
        <p>
          FARM DE AURA
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
