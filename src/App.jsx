import { useState } from 'react'
import Easyv from './layout/easyv'
import Login from './layout/login'
import Template from './layout/template'
import { Routes, Route, Navigate} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/Easyv" element={<Easyv></Easyv>}></Route>
        <Route path="/template" element={<Template></Template>}></Route>
        <Route path="/" element={<Navigate to="/login" replace={false}></Navigate>}></Route>
        <Route path="*" element={<div>没有页面</div>}></Route>
      </Routes>
    </div>
  )
}

export default App
