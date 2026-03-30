import { FaLinkedin, FaEnvelope, FaBrain, FaChartLine, FaMicroscope, FaRobot } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="greeting">Hello!</div>
          <h1 className="hero-title">
            I&apos;m <span className="highlight">Fairuz</span>
          </h1>
          <p className="hero-subtitle">
            Creative coder, curious thinker, tech tinkerer.
          </p>
          <div className="social-links">
            <a href="https://linkedin.com/in/fairuz-jahan" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="mailto:fairuz@my.yorku.ca" className="social-link">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="pixel-art-container">
            <div className="pixel-box pixel-box-1" role="img" aria-label="Artificial Intelligence">
              <div className="pixel-icon">
                <FaBrain />
              </div>
            </div>
            <div className="pixel-box pixel-box-2" role="img" aria-label="Machine Learning">
              <div className="pixel-icon">
                <FaChartLine />
              </div>
            </div>
            <div className="pixel-box pixel-box-3" role="img" aria-label="Research">
              <div className="pixel-icon">
                <FaMicroscope />
              </div>
            </div>
            <div className="pixel-box pixel-box-4" role="img" aria-label="Robotics">
              <div className="pixel-icon">
                <FaRobot />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
