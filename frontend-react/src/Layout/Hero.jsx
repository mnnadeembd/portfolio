import React, { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const Hero = () => {

  const [init, setInit] = useState(false);

  const text =
    "I design and develop fast, scalable, and user-focused web applications with modern technologies.";

  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  const [hideScrollDown, setHideScrollDown] = useState(false);

  // typing effect
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 20);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  // particles init
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  // scroll logic (ONLY for scroll-down)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // hide scroll-down after 50%
      setHideScrollDown(scrollY > heroHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="hero-section">

      {/* particles */}
      {init && (
        <Particles
          className="particles-bg"
          options={{
            fullScreen: false,
            background: { color: "transparent" },
            fpsLimit: 60,
            particles: {
              number: { value: 80 },
              color: { value: "#38bdf8" },
              links: {
                enable: true,
                color: "#38bdf8",
                distance: 120,
                opacity: 0.3,
              },
              move: { enable: true, speed: 0.3 },
              size: { value: 1 },
            },
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

        <p className="typing-text">
          {typedText}
          <span className="cursor">|</span>
        </p>
      </div>

      {/* scroll down only */}
      <div className={`scroll-down ${hideScrollDown ? "hide" : ""}`}>
        <div className="scroll-box">
          <div className="wheel"></div>
        </div>

        <div className="arrows">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

    </section>
  );
};

export default Hero;