import { useRef, useState } from 'react'

import './app.scss'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Cursor from './components/cursor/Cursor'


function App() {

  const portfolioRef = useRef();
  

  return (
    <>
    <Cursor />
    <section id='Homepage'>
      <Navbar />
      <Hero portfolioRef={portfolioRef}/>
      <Sidebar />
    </section>
    <section id='Services'>
      <Parallax type="services"/>
    </section>
    <section>Services</section>
    <section id='Portfolio'>
      <Parallax type="portfolio"/>
    </section>
    <Portfolio ref={portfolioRef} />
    <section id='Contact'>
    <Contact />
    </section>
    
    
      
        
      
      
    </>
  )
}

export default App
