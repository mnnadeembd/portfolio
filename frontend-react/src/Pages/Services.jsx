import React from "react";

const Services = () => {

  const services = [
    {
      title: "Frontend Development",
      icon: "fas fa-code",
      color: "linear-gradient(135deg, #38bdf8, #6366f1)",
      desc: "Building responsive and modern UI using React, Vue, HTML, CSS and Bootstrap."
    },
    {
      title: "Backend Development",
      icon: "fas fa-server",
      color: "linear-gradient(135deg, #f97316, #ef4444)",
      desc: "Developing scalable backend systems with PHP, Laravel and REST APIs."
    },
    {
      title: "Database Design",
      icon: "fas fa-database",
      color: "linear-gradient(135deg, #22c55e, #4ade80)",
      desc: "Designing efficient and secure databases using MySQL and SQLite."
    },
    {
      title: "API Integration",
      icon: "fas fa-plug",
      color: "linear-gradient(135deg, #e879f9, #c084fc)",
      desc: "Integrating third-party APIs and building RESTful services."
    },
    {
      title: "Bug Fixing",
      icon: "fas fa-bug",
      color: "linear-gradient(135deg, #facc15, #f59e0b)",
      desc: "Fixing bugs and improving performance of existing applications."
    },
    {
      title: "UI/UX Optimization",
      icon: "fas fa-pencil-ruler",
      color: "linear-gradient(135deg, #06b6d4, #3b82f6)",
      desc: "Enhancing user experience with clean and intuitive design."
    }
  ];

  // duplicate for infinite scroll
  const loopServices = [...services, ...services];

  return (
    <section id="services" data-cursor="green" className="services-section">
      <div className="container">

        <h2 className="text-center mb-5">My Services</h2>
        

        <div className="services-wrapper">

          <div className="services-track">

            {loopServices.map((service, index) => (
              <div className="service-card" key={index}>

                <i className={`${service.icon} service-icon`}></i>

                <h4
                  className="service-title"
                  style={{
                    background: service.color,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  {service.title}
                </h4>

                <p>{service.desc}</p>

              </div>
            ))}

          </div>

        </div>

      </div>
      <p className="services-note" data-aos="fade-left"><em>I am open to freelance and full-time opportunities. Let's build something amazing together.</em></p>
    </section>
  );
};

export default Services;