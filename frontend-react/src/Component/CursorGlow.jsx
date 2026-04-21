import { useEffect, useRef, useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState([]);
  const [color, setColor] = useState("#38bdf8");

  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    // mouse move
    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPos({ x: mouseX, y: mouseY });
    };

    // click ripple
    const onClick = (e) => {
      const id = Date.now();
      const newRipple = { x: e.clientX, y: e.clientY, id };

      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    };

    // smooth ring animation
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  // section-based color change
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((sec) => {
        const top = sec.offsetTop - window.innerHeight / 2;
        const height = sec.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          const type = sec.getAttribute("data-cursor");

          if (type === "green") setColor("#22c55e");
          else if (type === "pink") setColor("#ec4899");
          else if (type === "yellow") setColor("#eab308");
          else if (type === "violent") setColor("#7c3aed");
          else setColor("#38bdf8"); // default blue
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="cursor-wrapper">

      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ borderColor: color }}
      ></div>

      {/* Inner Dot */}
      <div
        className="cursor-dot"
        style={{
          left: pos.x,
          top: pos.y,
          background: color,
        }}
      ></div>

      {/* Ripple Effect */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="cursor-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            borderColor: color,
          }}
        ></span>
      ))}

    </div>
  );
};

export default CursorGlow;