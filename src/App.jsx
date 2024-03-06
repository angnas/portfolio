import { useState } from 'react'

import './app.scss'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Cursor from './components/cursor/Cursor'


function App() {
  

  return (
    <>
    <Cursor />
    <section id='Homepage'>
      <Navbar />
      <Hero />
      <Sidebar />
    </section>
    <section id='Services'>
      <Parallax type="services"/>
    </section>
    <section>Services</section>
    <section id='Portfolio'>
      <Parallax type="portfolio"/>
    </section>
    <Portfolio />
    <section id='Contact'>
    <Contact />
    </section>
    
    
      
        
      
      
    </>
  )
}

export default App
