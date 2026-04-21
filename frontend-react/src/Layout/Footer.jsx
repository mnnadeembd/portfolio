import React from "react";

const Footer = () => {
  return (
    <footer className="portfolio-footer" data-cursor="green" data-aos="fade-up">
      <div className="container text-center">
        <p className="footer-text mb-1">
          © 2026{" "}
          <span className="footer-name">
            <em>Md. Nuruzzaman Nadeem</em>
          </span>
        </p>

        <p className="footer-subtext">
          Built with passion using HTML, CSS, Bootstrap, JavaScript & React for frontend and Laravel for backend.
        </p>
      </div>
    </footer>
  );
};

export default Footer;