/* eslint-disable react/prop-types */

const Button = ({ children, color, onClick }) => {
  return (
    <div
      style={{
        background: "transparent",
        border: "none",
        color: `${color}`,
        fontWeight: "bold",
        fontSize: "1rem",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
