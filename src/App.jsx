import { useRef, useState } from 'react'
import './app.scss'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Cursor from './components/cursor/Cursor'
import { BrowserRouter } from "react-router-dom";
import About from './components/about/About'




function App() {

  

  return (
    <>

    <BrowserRouter>

    <Cursor />
    <section id='Homepage'>
      <Navbar />
      <Hero />
      <Sidebar />
    </section>
    <section id='About'>
      <Parallax type="about"/>
    </section>
    <About />
    <section id='Portfolio'>
      <Parallax type="portfolio"/>
    </section>
    <Portfolio />
    <section id='Contact'>
    <Contact />
    </section>

    </BrowserRouter>
      
    </>
  )
}

export default App
