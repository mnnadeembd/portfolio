import useMagnetic from "../assets/hooks/useMagnetic";

const MagneticButton = ({ children }) => {
  const ref = useMagnetic();

  return (
    <button ref={ref} className="magnetic-btn">
      {children}
    </button>
  );
};

export default MagneticButton;