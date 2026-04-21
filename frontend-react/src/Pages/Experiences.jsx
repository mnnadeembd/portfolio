import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {

  useLayoutEffect(() => {

    const items = gsap.utils.toArray(".timeline-item");

    items.forEach((item) => {

      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        autoAlpha: 1,

        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true
        }
      });

    });

  }, []);

  return (
    <section id="timeline" data-cursor="violent" className="section timeline-section">
      <div className="container">

        <h2 className="section-title text-center mb-5">
          Experience
        </h2>

        <div className="timeline">

          <div className="timeline-item left">
            <h5>Programme Coordinator</h5>
            <p>Prothom Alo | 2023 - 2024</p>
            <p>Key contributor to national campaigns like USAID's ACTB (TB awareness) with colaboration icddr'b and GPH Ispat EnGenius.</p>
          </div>

          <div className="timeline-item right">
            <h5>Secretary (ICPC Contest)</h5>
            <p>University of Asia Pacific | 2022</p>
            <p>Managed coordination for the 45th ICPC World Finals. Handled logistics and official documentation between ICT Division and ICPC Foundation.</p>
          </div>

          <div className="timeline-item left">
            <h5>Early Career Roles</h5>
            <p>Medipath Diagnostic | 2012–2013</p>
            <p>
              Served as a Receptionist, strengthening communication and organizational skills through front desk management and client interaction.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;