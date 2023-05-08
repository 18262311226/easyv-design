import { useState } from 'react'
import Easyv from './layout/easyv'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Easyv></Easyv>
    </div>
  )
}

export default App
