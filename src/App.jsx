
import './App.css'

function App() {
  const learningPaths = [
    {
      number: '01',
      icon: '🌱',
      title: 'GitHub Fundamentals',
      description:
        'Start from zero. Understand Git, GitHub, repositories and version control.',
      level: 'Beginner',
      lessons: '8 Lessons',
      color: 'green',
    },
    {
      number: '02',
      icon: '⚡',
      title: 'Git Commands',
      description:
        'Learn clone, add, commit, push, pull, branches and merge through practice.',
      level: 'Beginner',
      lessons: '10 Lessons',
      color: 'purple',
    },
    {
      number: '03',
      icon: '🚀',
      title: 'Build Real Projects',
      description:
        'Turn your knowledge into real projects and showcase your work on GitHub.',
      level: 'Intermediate',
      lessons: '6 Projects',
      color: 'blue',
    },
  ]

  const features = [
    {
      icon: '📚',
      title: 'Learn Step by Step',
      description:
        'Simple tutorials and practical examples designed for students who are new to GitHub.',
    },
    {
      icon: '🎯',
      title: 'Daily Challenges',
      description:
        'Complete small daily tasks, practise consistently and develop your coding habits.',
    },
    {
      icon: '📈',
      title: 'Track Your Growth',
      description:
        'Maintain your learning history and see your progress through visual reports.',
    },
    {
      icon: '💻',
      title: 'Build Projects',
      description:
        'Explore project ideas and learn how to create, manage and publish repositories.',
    },
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="brand">
          <span className="brand-icon">R</span>
          <span>Repo<span className="brand-highlight">Rise</span></span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#learning-paths">Learn</a>
          <a href="#features">Features</a>
          <a href="#projects">Projects</a>
        </div>

        <a href="#learning-paths" className="nav-button">
          Get Started <span>↗</span>
        </a>
      </nav>

      {/* Hero Section */}
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="announcement">
              <span className="live-dot"></span>
              YOUR JOURNEY TO BECOMING A BETTER DEVELOPER
            </div>

            <h1>
              Don't Just Code.
              <br />
              <span className="gradient-text">Grow Your GitHub.</span>
            </h1>

            <p className="hero-description">
              Learn GitHub from scratch, build real-world projects,
              complete daily challenges and track your progress
              — all in one place.
            </p>

            <div className="hero-actions">
              <a href="#learning-paths" className="primary-button">
                Start Learning <span>→</span>
              </a>

              <a href="#projects" className="secondary-button">
                Explore Projects <span>↗</span>
              </a>
            </div>

            <div className="hero-note">
              <span>✓</span> Designed for students and aspiring developers
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow glow-one"></div>
            <div className="glow glow-two"></div>

            <div className="code-card">
              <div className="card-top">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="terminal-name">your-growth.js</span>
              </div>

              <div className="code-content">
                <p><span className="code-purple">const</span> developer = {'{'}</p>
                <p className="indent">
                  name: <span className="code-green">'You'</span>,
                </p>
                <p className="indent">
                  learning: <span className="code-green">'GitHub'</span>,
                </p>
                <p className="indent">
                  consistency: <span className="code-blue">true</span>,
                </p>
                <p className="indent">
                  growth: <span className="code-green">'Every day'</span>
                </p>
                <p>{'}'}</p>
                <br />
                <p>
                  <span className="code-purple">while</span>
                  {' (developer) {'}
                </p>
                <p className="indent">
                  <span className="code-blue">learn</span>()
                </p>
                <p className="indent">
                  <span className="code-blue">build</span>()
                </p>
                <p className="indent">
                  <span className="code-blue">improve</span>()
                </p>
                <p>{'}'}</p>
              </div>

              <div className="terminal-footer">
                <span className="terminal-status"></span>
                Your journey starts here...
              </div>
            </div>

            <div className="floating-card floating-top">
              <span>🔥</span>
              <div>
                <strong>Build your streak</strong>
                <small>One step every day</small>
              </div>
            </div>

            <div className="floating-card floating-bottom">
              <span>📈</span>
              <div>
                <strong>Keep improving</strong>
                <small>Track your progress</small>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="stats">
          <div className="stat-item">
            <h2>01</h2>
            <p>Start from zero</p>
          </div>
          <div className="stat-item">
            <h2>Daily</h2>
            <p>Learn something new</p>
          </div>
          <div className="stat-item">
            <h2>Build</h2>
            <p>Real-world projects</p>
          </div>
          <div className="stat-item">
            <h2>Grow</h2>
            <p>Track your journey</p>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="section learning-section" id="learning-paths">
          <div className="section-heading">
            <span className="section-tag">YOUR LEARNING JOURNEY</span>
            <h2>
              Learn. Practise. <span className="gradient-text">Master.</span>
            </h2>
            <p>
              Follow structured learning paths and develop your GitHub
              skills one step at a time.
            </p>
          </div>

          <div className="learning-grid">
            {learningPaths.map((path) => (
              <div className="learning-card" key={path.number}>
                <div className="learning-card-top">
                  <span className={`path-icon ${path.color}`}>
                    {path.icon}
                  </span>
                  <span className="path-number">{path.number}</span>
                </div>

                <h3>{path.title}</h3>
                <p>{path.description}</p>

                <div className="card-meta">
                  <span>{path.level}</span>
                  <span>{path.lessons}</span>
                </div>

                <a href="#features" className="card-link">
                  Explore path <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="section features-section" id="features">
          <div className="section-heading">
            <span className="section-tag">WHY REPORISE?</span>
            <h2>
              Everything you need to <span className="gradient-text">grow.</span>
            </h2>
            <p>
              More than tutorials. A complete space to learn, practise
              and measure your improvement.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={feature.title}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <span className="feature-number">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="section projects-section" id="projects">
          <div className="project-banner">
            <div>
              <span className="section-tag">FROM LEARNING TO BUILDING</span>
              <h2>
                Your next big idea starts with a <span className="gradient-text">repository.</span>
              </h2>
              <p>
                Discover beginner-friendly project ideas, follow
                practical guides and learn how to showcase your work.
              </p>
              <a href="#learning-paths" className="primary-button">
                Explore Learning Paths →
              </a>
            </div>
            <div className="project-symbol">{"</>"}</div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <span className="section-tag">YOUR FUTURE SELF WILL THANK YOU</span>
          <h2>
            Small steps today.
            <br />
            <span className="gradient-text">Big growth tomorrow.</span>
          </h2>
          <p>Start your developer journey with RepoRise.</p>
          <a href="#home" className="primary-button">
            Begin Your Journey →
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <a href="#home" className="brand">
          <span className="brand-icon">R</span>
          <span>Repo<span className="brand-highlight">Rise</span></span>
        </a>
        <p>Learn. Build. Track. Rise.</p>
        <span>© 2026 RepoRise. Built for the next generation of developers.</span>
      </footer>
    </div>
  )
}

export default App
