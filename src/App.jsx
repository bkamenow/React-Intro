import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Exclusively from './components/Exclusively'
import Happy from './components/Happy'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header/>
      <Exclusively/>
      <Happy/>
      <Stats/>  
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
