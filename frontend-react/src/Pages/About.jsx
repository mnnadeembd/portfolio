import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MagneticButton from "..//Component/MagneticButton";

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="about" data-cursor="green" className="about-section py-5">
      <div className="container">

        <h2 className="text-center mb-5">
          About Me
        </h2>

        <div className="row align-items-center g-5">

          {/* Profile + Intro */}
          <div className="col-lg-5" data-aos="fade-right">
            <div className="about-card p-4 shadow-lg text-center">

              <img
                src="/photo/profile/profile.png"
                className="profile-img rounded-circle mb-4"
                alt="Nadeem"
              />

              

              <p className="text-secondary">
                <em>
                  "I’m an aspiring full-stack developer driven by curiosity and clean solutions. I love turning complex ideas into responsive, user-friendly products and I’m always leveling up my craft with modern frameworks and best practices."
                </em>
              </p>

              <a 
                href="https://drive.google.com/file/d/13N6sKO0ohL0TOPEeTzRHGV9HlR5bwPfH/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
               <MagneticButton> <i className="fas fa-file-download me-2"></i>
                Download Resume</MagneticButton>
              </a>

            </div>
          </div>

          {/* Education */}
          <div className="col-lg-7" data-aos="fade-left">
            <div className="about-card p-4 shadow-lg">

              <h4 className="mb-4 text-info border-bottom pb-2">
                Academic Background
              </h4>

              <div className="table-responsive">
                <table className="table table-dark  table-hover align-middle mb-0">

                  <thead>
                    <tr>
                      <th>Degree</th>
                      <th>Institute</th>
                      <th className="text-end">Year</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td><strong>IsDB-BISEW Diploma in Web Application Development with Laravel, React,
                        Vue.js &
                        WordPress</strong></td>
                      <td>Islamic Development Bank
                        Bangladesh Islamic Solidarity Educational Wakf (IsDB-BISEW) IT Scholarship
                        Programme</td>
                      <td className="text-end">2025</td>
                    </tr>

                    <tr>
                      <td><strong>M.Sc (Soil Science)</strong></td>
                      <td>University of Dhaka</td>
                      <td className="text-end">2019</td>
                    </tr>

                    <tr>
                      <td><strong>Honours (Soil Science)</strong></td>
                      <td>University of Dhaka</td>
                      <td className="text-end">2018</td>
                    </tr>

                    <tr>
                      <td><strong>HSC (Science)</strong></td>
                      <td>Bajitpur College</td>
                      <td className="text-end">2014</td>
                    </tr>
                    <tr>
                      <td><strong>SSC (Science)</strong></td>
                      <td>Bazitpur Hafez A. Razzak Pilot High School</td>
                      <td className="text-end">2012</td>
                    </tr>
                  </tbody>

                </table>
              </div>

            </div>
          </div>

        </div>
         <div className="link-button mt-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline me-2"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>

          <a href="#projects" className="btn btn-outline">
            View Work
          </a>
        </div>
      </div>

      
    </section>
    
  );
};

export default About;