import React, { useState, useRef, useEffect } from "react";
import Switch from "react-switch";
import { Menu, X } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";

const AnimatedThemeSwitch = ({ darkMode, onClick }) => {
  const buttonRef = useRef(null);
  const [circle, setCircle] = useState({ x: 0, y: 0, active: false });

  const handleClick = (e) => {
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCircle({ x, y, active: true });
    onClick();

    setTimeout(() => {
      setCircle((prev) => ({ ...prev, active: false }));
    }, 1000);
  };

  return (
    <div
      ref={buttonRef}
      onClick={handleClick}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
        padding: "8px",
        border: `1px solid white`,
        borderRadius: "31px",
        width: "150px",
      }}
    >
      {circle.active && (
        <div
          style={{
            position: "absolute",
            left: circle.x,
            top: circle.y,
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: darkMode ? "green" : "#00A2FF",
            transform: "translate(-50%, -50%)",
            animation: "ripple 1s ease-out forwards",
            filter: "blur(4px)",
            opacity: 0.8,
            zIndex: 1,
          }}
        />
      )}

      <p style={{ color: darkMode ? "white" : "white", fontWeight: "bold" }}>
        {darkMode ? "Vroom Vibe" : "Go Electric"}
      </p>

      <Switch
        onChange={onClick}
        checked={darkMode}
        offColor="#ddd"
        onColor="#333"
        offHandleColor="#00A2FF"
        onHandleColor="#008000"
        uncheckedIcon={false}
        checkedIcon={false}
        height={20}
        width={40}
        handleDiameter={18}
      />

      <style>
        {`
          @keyframes ripple {
            0% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.8;
            }
            100% {
              transform: translate(-50%, -50%) scale(100);
              opacity: 0.4;
            }
          }
        `}
      </style>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "1rem",
        background: darkMode
          ? "linear-gradient(135deg, #4CAF50, #1B5E20)"
          : "linear-gradient(135deg, #0000FF, #0040A0)",
        color: darkMode ? "#ffffff" : "#ffffff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        transition: "background-color 1s ease, color 1s ease",
        zIndex: 50,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 51,
        }}
      >
        <div style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
          <h1 style={{fontWeight: 'bold', fontStyle: 'initial', fontSize:"40px"}}><span style={{color:"White"}}>Auto</span><span style={{color:"#ec2400"}}>Vibe</span></h1>
        </div>

        <div
          style={{
            display: isMobile ? "none" : "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
            <p>Home</p>
          </a>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
            <p>About</p>
          </a>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
            <p>Services</p>
          </a>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
            <p>Contact</p>
          </a>
          <AnimatedThemeSwitch darkMode={darkMode} onClick={toggleTheme} />
        </div>

        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              padding: "0.5rem",
              border: "none",
              background: "none",
              cursor: "pointer",
              color: "inherit",
              position: "relative",
              zIndex: 52,
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {isMobile && isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            padding: "1rem",
            backgroundColor: darkMode ? "#1a202c" : "black",
            color: "#ffffff",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            zIndex: 49,
            transition: "background-color 1s ease",
          }}
        >
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
            <p>Home</p>
          </a>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
            <p>Home</p>
          </a>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
             <p>Services</p>
          </a>
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
             <p>Contact</p>
          </a>
          <AnimatedThemeSwitch darkMode={darkMode} onClick={toggleTheme} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
