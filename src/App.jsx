import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Aboutme from './components/AboutMe/Aboutme';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <>
    <Navbar/>
    <Aboutme/>
    <Skills/>
    <Contact/>
    </>
  )
}

export default App
