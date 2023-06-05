import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            As a developer, I have My technical skills include the use of JavaScript, React, Redux, NodeJS, Express, Sequelize, PostgreSQL, HTML, CSS, agile methodologies, Git, and data structure.
            I am practical, organized and I have an agile learning which allows me to be productive when creating dynamic, efficient and attractive web applications. I value good communication and the possibility of continuous learning that allows me to grow and succeed in the projects in which I participate.
          </p>
        </div>
        <div className="about-img">
          <Image src='/images/About.jpeg' className="profile-img" width={300} height={500} alt="Analia casual photo" />
        </div>
      </div>
    </div>
  )
}

export default About;