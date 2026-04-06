import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'TheTrueSkin',
      kind: 'Hackathon Project',
      tags: [
        'Python',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'TensorFlow',
        'Streamlit',
        'Gemini API',
      ],
      description:
        'An AI-powered web application that analyzes acne images and provides personalized treatment recommendations using computer vision and LLM integration.',
      color: 'var(--lofi-purple)',
    },
    {
      title: 'Diagnosium',
      kind: 'Independent Project',
      tags: ['Python', 'Streamlit', 'OpenAI API'],
      description:
        'An interactive AI-driven platform that generates realistic medical case studies and quizzes users with real-time feedback across multiple specialties.',
      color: 'var(--lofi-mint)',
    },
    {
      title: 'SolarShieldAI',
      kind: 'Hackathon Project',
      tags: [
        'Python',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Scikit-Learn',
        'JavaScript',
      ],
      description:
        'A machine learning application that predicts heat wave probability using historical weather data and presents insights through a user-friendly interface.',
      color: 'var(--lofi-pink)',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="title-decoration"></div>
        </div>

        <div className="projects-stack">
          {projects.map((project, index) => (
            <article
              key={index}
              className="project-panel"
              style={{ '--project-color': project.color }}
            >
              <div className="project-heading">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-kind">{project.kind}</span>
              </div>
              {project.tags && project.tags.length > 0 && (
                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}
              <p className="project-description">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
