import React from "react";
import { useTheme } from "../Context/ThemeContext";
import fuel from "../assets/fuel.png";
import electric from "../assets/electric.jpg";

const Banner = () => {
    const { darkMode } = useTheme();

    return (
        <div
            style={{
                width: "100vw",
                height: "400px",
                backgroundImage: `url(${darkMode ? electric : fuel})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "24px",
                fontWeight: "bold",
                textAlign: "center",
            }}
        >
            {/* Smoked Transparent Overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity for the smoked effect
                }}
            />
            {/* Dynamic Heading */}
            <h2 style={{ position: "relative", zIndex: 1, padding:"5px" }}>
                {darkMode ? "Power the Future, Drive Electric!" : "Fuel-Powered: Timeless Power, Unmatched Performance!"}
            </h2>
        </div>
    );
};

export default Banner;
