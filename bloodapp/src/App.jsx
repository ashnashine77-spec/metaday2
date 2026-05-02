import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import DorR from './components/DorR'
import Contact from './components/Contact'
import Volunteer from './components/Volunteer'
import Admin from './components/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
   <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/S' element={<Signup/>}/>
    <Route path='/h' element={<Home/>}/>
    <Route path='/a' element={<About/>}/>
    <Route path='/DR' element={<DorR/>}/>
    <Route path='/C' element={<Contact/>}/>
    <Route path='/v' element={<Volunteer/>}/>
    <Route path="/admin" element={<Admin />} />
  </Routes>
    </>
  )
}

export default App
