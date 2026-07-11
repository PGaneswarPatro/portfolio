function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>

      <div className="about-container">
        {/* Left Side - About */}
        <div className="about-left">
          <div className="about-content">
            <p>
              I'm a Software Engineer currently working on
              <strong> Fleet Enable</strong>, a logistics and transport supply
              chain platform, where I collaborate with clients, product owners,
              and developers to resolve production issues and deliver reliable
              solutions for real-world logistics challenges.
            </p>

            <p>
              I have knowledge in developing scalable backend applications
              using Java, Spring Boot, and SQL databases — building clean,
              reliable REST APIs designed to perform well under real-world
              demands. I also bring hands-on experience in full-stack
              development with React.js, Node.js, and MongoDB.
            </p>

            <p>
              I'm passionate about writing maintainable code, debugging
              production issues, and continuously growing my knowledge of
              microservices, distributed systems, and cloud technologies.
            </p>
          </div>

          <div className="skills-list">
            <span className="skill-tag">Java</span>
            <span className="skill-tag">Spring Boot</span>
            <span className="skill-tag">SQL</span>
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">Postman</span>
            <span className="skill-tag">Git</span>


          </div>
        </div>

        {/* Right Side - Education */}
        <div className="education-card">
          <h3>Education</h3>

          <div className="education-item">
            <h4>B.Tech in Electronics and Communication Engineering</h4>
            <p>ASTC Engineering College, Garividi, Vizianagaram, AP</p>
          </div>

          <div className="education-item">
            <h4>Diploma in Electronics and Communication Engineering</h4>
            <p>GPT, PVPM, Vizianagaram, AP</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;