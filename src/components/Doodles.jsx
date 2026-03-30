import { useMemo } from 'react'
import { FaStar, FaHeart, FaMoon, FaCloud, FaSquare } from 'react-icons/fa'
import './Doodles.css'

const Triangle = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em', display: 'block' }}>
    <path d="M12 2L22 20H2L12 2Z" />
  </svg>
)

const iconTemplates = [
  { icon: <FaStar />, sizes: ['small', 'medium', 'small'] },
  { icon: <FaHeart />, sizes: ['small', 'medium', 'small'] },
  { icon: <FaMoon />, sizes: ['small', 'medium'] },
  { icon: <FaCloud />, sizes: ['small', 'medium', 'large'] },
  { icon: <FaSquare />, sizes: ['small', 'medium'] },
  { icon: <Triangle />, sizes: ['small', 'medium'] },
]

const Doodles = () => {
  // Generate 50 doodles once on mount - positions stay fixed
  const doodles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => {
      const template = iconTemplates[Math.floor(Math.random() * iconTemplates.length)]
      const size = template.sizes[Math.floor(Math.random() * template.sizes.length)]
      
      return {
        icon: template.icon,
        size,
        left: 2 + Math.random() * 96,
        top: 2 + Math.random() * 96,
        rotation: Math.random() * 360,
        delay: Math.random() * 5,
      }
    })
  }, []) // Empty dependency array means this only runs once

  return (
    <div className="doodles-container">
      {doodles.map((doodle, index) => (
        <div
          key={index}
          className={`doodle doodle-${doodle.size}`}
          style={{
            left: `${doodle.left}%`,
            top: `${doodle.top}%`,
            '--rotation': `${doodle.rotation}deg`,
            '--delay': `${doodle.delay}s`,
          }}
        >
          {doodle.icon}
        </div>
      ))}
    </div>
  )
}

export default Doodles
