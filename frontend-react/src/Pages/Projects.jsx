import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const colors = [
    "#38bdf8",
    "#a78bfa",
    "#f472b6",
    "#f59e0b",
    "#34d399",
    "#f87171"
  ];

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/projects`)
      .then(res => res.json())
      .then(data => setProjects(data.projects))
      .catch(err => console.log(err));
  }, []);

  return (
    <section id="projects" data-cursor="yellow" className="project-section text-center cursor-glow">
      <div className="container">

        <h2 className="mb-5" data-aos="fade-up">
          Projects
        </h2>

        <div className="row g-4 justify-content-center">

          {projects.map((p, index) => (
            <div
              key={p.ProjectID}
              className="col-md-6 col-lg-4"
              data-aos="zoom-in"
            >
              <div className="project-card p-4 h-100">

                {/* Image */}
                <img
                  src={p.ProjectPhoto}
                  alt={p.ProjectName}
                  className="img-fluid mb-3 rounded"
                />

                {/* Title */}
                <h5
                  className="project-title"
                  style={{ color: colors[index % colors.length] }}
                >
                  {p.ProjectName}
                </h5>

                {/* Description */}
                <p className="project-desc">
                  {p.ProjectDescription}
                </p>

                {/* Buttons */}
                <div className="mt-3 d-flex justify-content-center gap-2">

                  <a
                    href={p.ProjectLive}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    <i className="fas fa-globe"></i> Live
                  </a>

                  <a
                    href={p.ProjectCode}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline-light"
                  >
                    <i className="fab fa-github"></i> Code
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;