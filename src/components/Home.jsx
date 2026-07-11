import { Link } from "react-scroll";
import '../App.css';

function Home() {
  return (
    <section id="home" className="hero">
      <div className="left">
        <h3>Hello, I'm</h3>
        <h1>P Ganeswar Patro</h1>
        <h2>Backend Developer</h2>

        <div className="about-content">
          <p>
            I am a passionate Full Stack Developer with experience in designing
            and developing modern, scalable web applications using Java, Spring,
            Spring Boot, and SQL databases. I enjoy building robust backend
            systems and creating responsive, user-friendly applications that
            deliver exceptional user experiences.
          </p>

          <p>
            I have also worked on full-stack applications using React,
            Express.js, and Node.js. By leveraging modern AI development tools,
            I can accelerate the development process, improve productivity, and
            deliver high-quality applications more efficiently.
          </p>

          <p>
            My expertise includes developing high-performance applications with
            clean architecture, responsive design, and optimized performance
            while following industry best practices.
          </p>

          <p>
            I am a continuous learner who enjoys solving complex problems,
            exploring emerging technologies, and building innovative software
            solutions that create meaningful business value.
          </p>
        </div>

        <div className="buttons">
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            offset={-80}
            className="btn"
          >
            View Projects
          </Link>

        

           <Link
            to="contact"
            smooth={true}
            duration={1000}
            offset={-80}
            className="btn-outline"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="right">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQGqXCVxJwQtcA/profile-displayphoto-scale_400_400/B4DZ8uVCRGJwAk-/0/1783188696292?e=1785369600&v=beta&t=c06UjviMj2KnCPHZGOgsjFKWnu0oNy0g-LDPHyYbYP0"
          alt="profile"
        />
      </div>
    </section>
  );
}

export default Home;
