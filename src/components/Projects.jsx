const projects = [
  {
    title: "Order Tracking System",
    desc:
      "Designed and developed a scalable backend application for real-time order tracking, enabling users to monitor order status, current location, product information, and customer contact details. Built secure REST APIs and optimized database operations to ensure reliable performance and efficient data retrieval.",
    tech: ["Java", "Spring Boot", "JPA", "SQL"],
    github: "https://github.com/PGaneswarPatro/orderTrackingSystem",
  },
  {
    title: "Social Media Clone",
    desc: "Developed a secure, production-ready backend application with JWT authentication, role-based authorization, cloud image storage, email notifications, and documented REST APIs. Implemented database migrations with Liquibase and designed a dual-database architecture using H2 for development and SQL Server for production.",
    tech: ["Java", "Spring Boot", "Spring Security", "JPA", "SQL", "Swagger UI", "Liquibase"],
    github: "https://github.com/PGaneswarPatro/socialMediaClone",
  },
 
];


function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>

            <p className="project-desc">
              {project.desc}
            </p>

            <div className="tech-stack">
              {project.tech.map((item) => (
                <span
                  className="tech-badge"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
