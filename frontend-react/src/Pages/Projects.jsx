import React from "react";

const Projects = () => {
  return (
    <section id="projects" data-cursor="yellow" className="project-section text-center  cursor-glow">
      <div className="container">
        <h2 className="mb-5" data-aos="fade-up">Projects</h2>

        <div className="row g-4 justify-content-center">

          {/* Project Card */}
          <div className="col-md-6 col-lg-4" data-aos="zoom-in">
            <div className="project-card p-4 h-100">
              <h5 className="project-title">Personal Portfolio Website</h5>

              <p className="project-desc">
                A responsive portfolio website built with HTML, CSS, Bootstrap, JavaScript and Laravel.
              </p>

              <div className="mt-3">
                <a href="http://nuruzzaman.intelsofts.com/" target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
                  <i className="fas fa-globe"></i> Live Demo
                </a>

                <a href="https://github.com/mnnadeembd/portfolio" target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-light">
                  <i className="fab fa-github"></i> Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-6 col-lg-4" data-aos="zoom-in">
            <div className="project-card p-4 h-100">
              <h5 className="project-title">Reuters News Website Clone</h5>

              <p className="project-desc">
                Demonstrates strong skills in layout design and responsive styling without JavaScript frameworks.
              </p>

              <div className="mt-3">
                <a href="http://nuruzzaman.intelsofts.com/html/" target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
                  <i className="fas fa-globe"></i> Live Demo
                </a>

                <a href="#" className="btn btn-sm btn-outline-light">
                  <i className="fab fa-github"></i> Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-6 col-lg-4" data-aos="zoom-in">
            <div className="project-card p-4 h-100">
              <h5 className="project-title">Agro Shop Management System</h5>

              <p className="project-desc">
                Full-stack PHP application demonstrating database management and business logic.
              </p>

              <div className="mt-3">
                <a href="http://nuruzzaman.intelsofts.com/php/" target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
                  <i className="fas fa-globe"></i> Live Demo
                </a>

                <a href="#" className="btn btn-sm btn-outline-light">
                  <i className="fab fa-github"></i> Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="col-md-6 col-lg-4" data-aos="zoom-in">
            <div className="project-card p-4 h-100">
              <h5 className="project-title">React + API System</h5>

              <p className="project-desc">
                React frontend integrated with PHP REST API for dynamic application.
              </p>

              <div className="mt-3">
                <a href="http://nuruzzaman.intelsofts.com/react" target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
                  <i className="fas fa-globe"></i> Live Demo
                </a>

                <a href="#" className="btn btn-sm btn-outline-light">
                  <i className="fab fa-github"></i> Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="col-md-6 col-lg-4" data-aos="zoom-in">
            <div className="project-card p-4 h-100">
              <h5 className="project-title">HR Management System</h5>

              <p className="project-desc">
                HR system with attendance, leave and payroll features.
              </p>

              <div className="mt-3">
                <a href="http://nuruzzaman.intelsofts.com/hr" target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
                  <i className="fas fa-globe"></i> Live Demo
                </a>

                <a href="#" className="btn btn-sm btn-outline-light">
                  <i className="fab fa-github"></i> Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="col-md-6 col-lg-4" data-aos="zoom-in">
            <div className="project-card p-4 h-100">
              <h5 className="project-title">Vue.js Application</h5>

              <p className="project-desc">
                SPA built using Vue.js with fast and dynamic UI experience.
              </p>

              <div className="mt-3">
                <a href="http://nuruzzaman.intelsofts.com/hr" target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
                  <i className="fas fa-globe"></i> Live Demo
                </a>

                <a href="#" className="btn btn-sm btn-outline-light">
                  <i className="fab fa-github"></i> Code
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;