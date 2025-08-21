import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Aboutme from './components/AboutMe/Aboutme';
import Skills from './components/Skills/Skills';

function App() {

  return (
    <>
    <Navbar/>
    <Aboutme/>
    <Skills/>
    </>
  )
}

export default App
