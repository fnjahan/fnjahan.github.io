import { useRef } from 'react'
import { FaBrain, FaChartLine, FaMicroscope, FaRobot } from 'react-icons/fa'
import aboutMeVideo from './AboutMeVideo.mp4'
import './About.css'

const About = () => {
  const videoPrimedRef = useRef(false)

  const primeFirstFrame = (e) => {
    const v = e.currentTarget
    if (videoPrimedRef.current || v.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return
    videoPrimedRef.current = true
    // Tiny seek so the browser decodes and paints a frame (metadata-only preload stays blank)
    if (v.currentTime < 0.01) v.currentTime = 0.001
  }
  const skills = [
    { icon: <FaBrain />, name: 'Artificial Intelligence', color: 'var(--lofi-purple)' },
    { icon: <FaChartLine />, name: 'Machine Learning', color: 'var(--lofi-pink)' },
    { icon: <FaMicroscope />, name: 'Research', color: 'var(--lofi-mint)' },
    { icon: <FaRobot />, name: 'Robotics', color: 'var(--lofi-peach)' },
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-decoration"></div>
        </div>
        
        <div className="about-content">
          <div className="about-split">
            <div className="about-video-column">
              <div className="about-video-frame">
                <video
                  className="about-video"
                  src={`${aboutMeVideo}#t=0.001`}
                  controls
                  playsInline
                  preload="auto"
                  onLoadedData={primeFirstFrame}
                  onCanPlay={primeFirstFrame}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="about-copy">
              <p>
                I&apos;m a third-year Computer Science student at York University with a strong passion
                for AI, machine learning, and research! I enjoy building and experimenting with models,
                working with real-world data, and turning complex ideas into practical, working systems.
                Whether it&apos;s training models, optimizing performance, or diving into new
                techniques, I&apos;m always excited to push my skills further. I&apos;m naturally curious,
                love collaborating with others, and tackling challenging problems that blend
                creativity with technical depth.
              </p>
            </div>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card" style={{ '--skill-color': skill.color }}>
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
