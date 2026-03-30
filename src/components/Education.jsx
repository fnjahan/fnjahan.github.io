import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const entries = [
    {
      degree: 'Honours Bachelor of Science in Computer Science',
      school: 'York University',
      location: 'Toronto, ON',
      period: '2023 – Present',
      color: 'var(--lofi-purple)',
    },
    {
      degree: 'Ontario Secondary School Diploma',
      school: 'Sir Wilfrid Laurier Collegiate Institute',
      location: 'Scarborough, ON',
      period: 'September 2019 – June 2023',
      color: 'var(--lofi-mint)',
    },
  ]

  return (
    <section id="education" className="education">
      <div className="education-container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="title-decoration"></div>
        </div>

        <div className="education-timeline">
          {entries.map((item, index) => (
            <div key={index} className="education-item" style={{ '--edu-color': item.color }}>
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-content">
                <h3 className="education-degree">{item.degree}</h3>
                <div className="education-school">{item.school}</div>
                <div className="education-meta">
                  <span className="education-location">
                    <FaMapMarkerAlt /> {item.location}
                  </span>
                  <span className="education-period">
                    <FaCalendarAlt /> {item.period}
                  </span>
                </div>
                {item.detail && (
                  <p className="education-detail">{item.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
