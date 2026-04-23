import React, { useEffect, useState } from "react";

const ScrollTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;

      const scrollPercent =
        scrollY / (docHeight - window.innerHeight);

      setShow(scrollPercent > 0.06);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-top-btn ${show ? "show" : ""}`}
      onClick={scrollToTop}
    >
      I
    </button>
  );
};

export default ScrollTopButton;