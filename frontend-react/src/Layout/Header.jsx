import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // scroll shrink + active section detect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "timeline", "services", "contact"];

      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? "scrolled" : ""}`}>
      <div className="container">

        {/* BRAND */}
        <a href="#home" className="navbar-brand">
          @mnnadeem
        </a>

        {/* TOGGLER */}
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto nav-links">

            {["about", "skills", "projects", "timeline", "services", "contact"].map((item) => (
              <li key={item}>
                <a
                  className={`nav-link ${active === item ? "active" : ""}`}
                  href={`#${item}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Header;