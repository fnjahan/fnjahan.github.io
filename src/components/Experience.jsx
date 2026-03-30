import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Research and Innovation Co-op',
      company: 'Peel Regional Police',
      period: 'January 2026 – April 2026',
      responsibilities: [
        'Built and deployed custom AI Agents and automations to optimize complex policing and technical workflows',
        'Evaluated AI use cases and developed adoption pathways for intelligent agentic systems across departments',
        'Supported development of governance, compliance, and ethics policies for accountable AI integration',
      ],
      color: 'var(--lofi-purple)',
    },
    {
      type: 'work',
      title: 'Website Developer Intern',
      company: 'Neurodiversity Change Foundation',
      period: 'October 2025 – December 2025',
      responsibilities: [
        'Launched a fully responsive Squarespace website, ensuring cross-device compatibility and accessibility compliance',
        'Improved site usability by restructuring navigation, layout, and visual hierarchy using UI/UX best practices',
        'Collaborated with stakeholders to gather and translate organizational goals into functional web features',
      ],
      color: 'var(--lofi-mint)',
    },
  ]

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <div className="title-decoration"></div>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item" style={{ '--exp-color': exp.color }}>
              <div className="experience-icon">
                <FaBriefcase />
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-type">{exp.type === 'work' ? 'Work' : 'Volunteer'}</span>
                </div>
                <div className="experience-company">{exp.company}</div>
                <div className="experience-meta">
                  <span className="experience-period">
                    <FaCalendarAlt /> {exp.period}
                  </span>
                </div>
                {exp.description && (
                  <p className="experience-description">{exp.description}</p>
                )}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="experience-responsibilities">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
