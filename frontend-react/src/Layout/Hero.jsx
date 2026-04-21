import React, { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const Hero = () => {

  const [init, setInit] = useState(false);

  // ✅ Typing state
  const text = "I build fast, scalable web applications with Laravel, PHP, React, and Vue.js";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  // ✅ Typing effect (React way)
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 60);

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  // particles init
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section id="home" data-cursor="blue" className="hero-section">

      {/* Particles */}
      {init && (
        <Particles
          className="particles-bg"
          options={{
            fullScreen: false,
            background: { color: "transparent" },
            fpsLimit: 60,
            particles: {
              number: {
                value: 120,
                density: { enable: true, area: 800 }
              },
              color: { value: "#38bdf8" },
              links: {
                enable: true,
                color: "#38bdf8",
                distance: 120,
                opacity: 0.3
              },
              move: {
                enable: true,
                speed: 0.8
              },
              size: {
                value: { min: 1, max: 1 }
              }
            }
          }}
        />
      )}

      {/* HERO CONTENT */}
      <div className="container hero-content">

        <h4 className="accent mb-3">
          FULL-STACK WEB APPLICATION DEVELOPER
        </h4>

        <h1>
          Md. Nuruzzaman <span className="accent">Nadeem</span>
        </h1>

        {/* ✅ Typing Text */}
        <p className="typing-text">
          {typedText}
          <span className="cursor">|</span>
        </p>

      

        <div className="buttons mt-4">
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

export default Hero;