import { useState } from 'react'
import './App.css'
import './app.scss'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'

function App() {
  

  return (
    <>
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
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id='Contact'>Contact</section>
    
      
        
      
      
    </>
  )
}

export default App
