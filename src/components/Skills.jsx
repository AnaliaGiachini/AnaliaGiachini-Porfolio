const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        <div className="skill-card js">
          <i className="fa-brands fa-js-square js-icon"></i>
          <p>JavaScript</p>
        </div>
        <div className="skill-card react">
          <i className="fa-brands fa-react react-icon"></i>
          <p>React</p>
        </div>
        <div className="skill-card redux">
          <i className="fa-brands fa-react react-icon"></i>
          <p>Redux</p>
        </div>
        <div className="skill-card node">
          <i className="fa-brands fa-node-js node-icon"></i>
          <p>Node</p>
        </div>
        <div className="skill-card express">
          <i className="fa-brands fa-node-js node-icon"></i>
          <p>Express</p>
        </div>
        <div className="skill-card sequelize">
          <i className="fa-duotone fa-cube"></i>
          <p>Sequelize</p>
        </div>
        <div className="skill-card postgreSQL">
          <i className="fa-solid fa-database"></i>
          <p>PostgreSQL</p>
        </div>
        <div className="skill-card git">
        <i className="fa-brands fa-git-alt"></i>
          <p>Git</p>
        </div>
        <div className="skill-card github">
        <i className="fa-brands fa-github"></i>
          <p>GitHub</p>
        </div>
        <div className="skill-card npm">
        <i className="fa-brands fa-npm"></i>
          <p>Npm</p>
        </div>
        <div className="skill-card vercel">
        <i className="fa-solid fa-caret-up"></i>
          <p>Vercel</p>
        </div>
        <div className="skill-card html">
          <i className="fa-brands fa-html5 html-icon"></i>
          <p>HTML</p>
        </div>
        <div className="skill-card css">
          <i className="fa-brands fa-css3-alt css-icon"></i>
          <p>CSS</p>
        </div>
      </div>
    </div>
  )
}

export default Skills;