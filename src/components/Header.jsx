import { useState, useEffect } from 'react'
import './Header.css'

const Header = ({ scrollY }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setIsScrolled(scrollY > 50)
  }, [scrollY])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <a href="#home" className="logo-link">
            <span className="logo-text">Fairuz&apos;s Portfolio</span>
          </a>
        </div>
        
        <nav className="nav">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
