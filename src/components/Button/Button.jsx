import React from "react";

const Button = ({ item, onClick }) => {
  const { text, link } = item;

  const handleClick = () => {
    if (onClick) onClick(item); // call optional handler
    if (link) window.open(link, "_blank"); // open link in new tab
  };

  return (
    <button
      onClick={handleClick}
      style={{
        border: "1px solid black",
        width: "180px",
        height: "50px",
        borderRadius: "10px",
        background: "linear-gradient(to right, #be7725ff)",
        color: "white",
        cursor: "pointer",
        flex: "0 0 auto",
        textAlign: "center",
        fontSize: "16px",
        fontWeight: "500",
        transition: "all 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "#be7725ff")
      }
    >
      {text}
    </button>
  );
};

export default Button;
