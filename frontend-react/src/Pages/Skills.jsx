import React, { useEffect, useState } from "react";

const Skills = () => {

  const [active, setActive] = useState("frontend");

  useEffect(() => {
    const circles = document.querySelectorAll(".progress");

    circles.forEach(circle => {
      const percent = circle.getAttribute("data-percent");
      const radius = 52;
      const circumference = 2 * Math.PI * radius;

      circle.style.strokeDasharray = circumference;
      circle.style.strokeDashoffset = circumference;

      setTimeout(() => {
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
      }, 300);
    });

  }, [active]); // 🔥 important

  const skills = [
  // FRONTEND
  { name: "HTML", percent: 90, icon: "fab fa-html5", color: "#f97316", type: "frontend" },
  { name: "CSS", percent: 85, icon: "fab fa-css3-alt", color: "#38bdf8", type: "frontend" },
  { name: "JavaScript", percent: 80, icon: "fab fa-js", color: "#facc15", type: "frontend" },
  { name: "Bootstrap", percent: 85, icon: "fab fa-bootstrap", color: "#7c3aed", type: "frontend" },
  { name: "React", percent: 80, icon: "fab fa-react", color: "#38bdf8", type: "frontend" },
  { name: "VueJS", percent: 75, icon: "fab fa-vuejs", color: "#22c55e", type: "frontend" },

  // BACKEND (🔥 UPDATED)
  { name: "PHP", percent: 85, icon: "fab fa-php", color: "#a855f7", type: "backend" },
  { name: "Laravel", percent: 85, icon: "fas fa-server", color: "#ef4444", type: "backend" },
  { name: "REST API", percent: 80, icon: "fas fa-plug", color: "#38bdf8", type: "backend" },
  { name: "GraphQL", percent: 70, icon: "fas fa-project-diagram", color: "#e10098", type: "backend" },

  // DATABASE / TOOLS
  { name: "MySQL", percent: 80, icon: "fas fa-database", color: "#22c55e", type: "tools" },
  { name: "SQLite", percent: 75, icon: "fas fa-database", color: "#60a5fa", type: "tools" },

  // DEV TOOLS
  { name: "Git", percent: 80, icon: "fab fa-git-alt", color: "#f97316", type: "tools" },
  { name: "GitHub", percent: 75, icon: "fab fa-github", color: "#e2e8f0", type: "tools" },
  { name: "jQuery", percent: 75, icon: "fas fa-code", color: "#06b6d4", type: "tools" }
];

  const filtered = skills.filter(s => s.type === active);

  return (
    <section id="skills" data-cursor="pink" className="skills-section">
      <div className="container">

        <h2 className="text-center mb-4">My Skills</h2>

        {/* 🔥 TABS */}
        <div className="tabs">
          <button onClick={() => setActive("frontend")} className={active === "frontend" ? "active" : ""}>Frontend</button>
          <button onClick={() => setActive("backend")} className={active === "backend" ? "active" : ""}>Backend</button>
          <button onClick={() => setActive("tools")} className={active === "tools" ? "active" : ""}>Tools</button>
        </div>

        {/* GRID */}
        <div className="skills-grid">

          {filtered.map((skill, index) => (
            <div className="skill-card" key={index}>

              <div className="circle">

                <svg width="120" height="120">

                  <circle className="bg" cx="60" cy="60" r="52" />

                  <circle
                    className="progress"
                    cx="60"
                    cy="60"
                    r="52"
                    data-percent={skill.percent}
                    style={{ stroke: skill.color }}
                  />

                </svg>

                <div className="circle-content">
                  <i className={`${skill.icon} skill-icon`}></i>
                  <div className="number">{skill.percent}%</div>
                </div>

              </div>

              <p className="skill-name">{skill.name}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;