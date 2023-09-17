import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            I am a Software Developer with experience in creating web applications, both on the client and server sides. My skill set includes a strong knowledge base in technologies like JavaScript, React, and Node.js. I have gained expertise in the IT world by tackling various challenges and projects. But my story goes beyond my professional career, as my life has been marked by constant adaptation to different scenarios, something I consider one of my greatest strengths.

            I have had the opportunity to travel and experience diverse cultures, which has fostered my open and receptive mindset. I always seek to learn something new and productive in each experience, driving my continuous development.
            
            My versatility to work both in teams and independently reflects my adaptability to various work dynamics. I have collaborated on projects that required communication and cooperation, but I have also led initiatives autonomously, demonstrating self-discipline and self-management skills.
            My experience with agile methodologies like Scrum and my proficiency in Git and GitHub make me an efficient contributor to any development team.

            In the future, I am looking for a job that challenges me and promotes my professional growth in IT. I wish to join a dynamic team where I can apply my technical skills to projects that have a positive impact on the community or the company.
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