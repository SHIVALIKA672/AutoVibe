import React from "react";
import { UilArrowRight } from "@iconscout/react-unicons";
import { useTheme } from "../Context/ThemeContext";

const AI = () => {
  const { darkMode } = useTheme();

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          paddingTop: "20px",
          background: darkMode
            ? "linear-gradient(135deg, #052e16, #047857, #10b981, #34d399)" // Green variant for dark mode
            : "linear-gradient(135deg, #0f172a, #2563eb, #8b5cf6, #a855f7)", // Default gradient
          color: "white",
          paddingBottom: "20px",
          overflowX: "auto", // Added for horizontal scroll
          WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
        }}
      >
        <div
          style={{
            padding: "20px 20px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            minWidth: "1300px", // Added to ensure cards don't squish
            gap: "20px", // Added for consistent spacing
          }}
        >
          <div
            style={{
              width: "300px",
              height: "210px",
              borderRadius: "31px",
              background:
                "linear-gradient(135deg, #0b0f19, #1e293b, #334155, #4b5563)",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.6)",
              position: "relative",
              flexShrink: 0, // Added to prevent card shrinking
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px",
              }}
            >
              <p>
                Not sure what to buy? Let our{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #00C6FF, #0072FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  AI {""}
                </span>
                assist you!
              </p>
            </div>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: darkMode
                  ? "linear-gradient(135deg, #052e16, #047857, #10b981, #34d399)" // Green variant for dark mode
                  : "linear-gradient(135deg, #0f172a, #2563eb, #8b5cf6, #a855f7)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                bottom: "20px",
                right: "20px",
                fontWeight: "bold",
              }}
            >
              <UilArrowRight size="30" color="white" />
            </div>
          </div>
          <div
            style={{
              width: "300px",
              height: "210px",
              borderRadius: "31px",
              background:
                "linear-gradient(135deg, #0b0f19, #1e293b, #334155, #4b5563)",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.6)",
              position: "relative",
              flexShrink: 0, // Added to prevent card shrinking
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px",
              }}
            >
              <p>
                Have a model in mind and want to explore options in the same
                price range with better features? Let our{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #00C6FF, #0072FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  AI
                </span>{" "}
                do it.
              </p>
            </div>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: darkMode
                  ? "linear-gradient(135deg, #052e16, #047857, #10b981, #34d399)" // Green variant for dark mode
                  : "linear-gradient(135deg, #0f172a, #2563eb, #8b5cf6, #a855f7)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                bottom: "20px",
                right: "20px",
                fontWeight: "bold",
              }}
            >
              <UilArrowRight size="30" color="white" />
            </div>
          </div>
          <div
            style={{
              width: "300px",
              height: "210px",
              borderRadius: "31px",
              background:
                "linear-gradient(135deg, #0b0f19, #1e293b, #334155, #4b5563)",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.6)",
              position: "relative",
              flexShrink: 0, // Added to prevent card shrinking
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px",
              }}
            >
              <p style={{ color: "white" }}>
                Curious about your car's mileage? Let our system calculate it
                for you!
              </p>
            </div>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: darkMode
                  ? "linear-gradient(135deg, #052e16, #047857, #10b981, #34d399)" // Green variant for dark mode
                  : "linear-gradient(135deg, #0f172a, #2563eb, #8b5cf6, #a855f7)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                bottom: "20px",
                right: "20px",
                fontWeight: "bold",
              }}
            >
              <UilArrowRight size="30" color="white" />
            </div>
          </div>
          <div
            style={{
              width: "300px",
              height: "210px",
              borderRadius: "31px",
              background:
                "linear-gradient(135deg, #0b0f19, #1e293b, #334155, #4b5563)",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.6)",
              position: "relative",
              flexShrink: 0, // Added to prevent card shrinking
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px",
              }}
            >
              <p style={{ color: "white" }}>
                Wondering how much your daily or monthly drives cost? Use our
                system to find out instantly!
              </p>
            </div>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: darkMode
                  ? "linear-gradient(135deg, #052e16, #047857, #10b981, #34d399)" // Green variant for dark mode
                  : "linear-gradient(135deg, #0f172a, #2563eb, #8b5cf6, #a855f7)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                bottom: "20px",
                right: "20px",
                fontWeight: "bold",
              }}
            >
              <UilArrowRight size="30" color="white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AI;
