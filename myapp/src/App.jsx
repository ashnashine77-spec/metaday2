import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Name from './components/name'
import Api from './components/Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <br /><br /><br />
     <h1>WELCOME</h1>
 <Navbar/>
 <Routes>
   <Route path='/login' element={<Login/>}/>
   <Route path='/S' element={<Signup/>}/>
   <Route path='/state' element={<StateBasics/>}/>
   <Route path='/n' element={<Name/>}/>
   <Route path='/api' element={<Api/>}/>
 </Routes>
    </>
  )
}

export default App
