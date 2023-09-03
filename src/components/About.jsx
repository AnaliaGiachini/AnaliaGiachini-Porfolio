import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            I believe programming gives me the freedom to travel and visit different parts of the world as well as be independent. I am a full stack developer with extensive experience in both backend and frontend and I love that my work is always different.
            I have My technical skills include the use of JavaScript, React, Redux, NodeJS, Express, Sequelize, PostgreSQL, HTML, CSS, agile methodologies, Git, and data structure.
            I was born and grew up in Argentina, but now I’m living in Denmark.I love to travel, especially because I can meet, learn and open my mind. I enjoy making each solution developed unique, creative and custom. I am always working on myself. I work every day on my English skills, new technologies and different projects.
            I get on well with people and always I am in a good mood,I value good communication and the possibility of continuous learning.
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