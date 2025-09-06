import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Aboutme from './components/AboutMe/Aboutme';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
    <Navbar/>
    <Aboutme/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
