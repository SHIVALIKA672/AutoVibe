import React, { useEffect, useState } from "react";
import { useTheme } from "../Context/ThemeContext";

const News = () => {
  const { darkMode } = useTheme();
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5001/api/car-news")
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: darkMode ? "#1a202c" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        transition: "background-color 1s ease, color 1s ease",
        padding: "20px",
      }}
    >
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: darkMode
              ? "rgba(0, 0, 0, 0.7)"
              : "rgba(255, 255, 255, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              border: `4px solid ${darkMode ? "#1a202c" : "#f0f0f0"}`,
              borderTop: `4px solid ${darkMode ? "#ffffff" : "#3498db"}`,
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              animation: "spin 1s linear infinite",
            }}
          />
        </div>
      )}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          /* Completely hide scrollbar while keeping scrollable content */
          .news-container {
            overflow-x: auto;
            white-space: nowrap;
            -ms-overflow-style: none;  /* Hide scrollbar for IE & Edge */
            scrollbar-width: none;  /* Hide scrollbar for Firefox */
          }
          .news-container::-webkit-scrollbar {
            display: none; /* Hide scrollbar for Chrome, Safari & Opera */
          }

          /* Clip the bottom 5px to hide any remaining scrollbar */
          .scroll-wrapper {
            position: relative;
            overflow: hidden;
            clip-path: inset(0px 0px 5px 0px);
          }
        `}
      </style>
      <h2>Top Car News</h2>
      <br />
      <div className="scroll-wrapper">
        <div
          className="news-container"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            paddingBottom: "10px",
            width: "100%",
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {!loading &&
            news
              .filter((item) => item.image)
              .map((item, index) => (
                <div
                  key={index}
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
                    backgroundColor: darkMode ? "#2d3748" : "#ffffff",

                    transition: "transform 0.2s",
                    width: "300px",
                    height: "350px",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={`data:image/jpeg;base64,${item.image}`}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                  <h3
                    style={{
                      margin: "10px 0",
                      whiteSpace: "normal",
                      overflowWrap: "break-word",
                      textAlign: "left",
                      padding: "10px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: darkMode ? "#90cdf4" : "#007bff",
                      textDecoration: "none",
                      fontWeight: "bold",
                      padding: "10px",
                    }}
                  >
                    Read More
                  </a>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default News;
