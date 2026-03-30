import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Doodles from './components/Doodles'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)

  // Always start at home on load/refresh
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Doodles />
      <Header scrollY={scrollY} />
      <Hero />
      <About />
      <Education />
      <Experience />
    </div>
  )
}

export default App
