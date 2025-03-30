import React, { useEffect, useState } from "react";
import { useTheme } from "../Context/ThemeContext";

const News = () => {
  const { darkMode } = useTheme();
  const [loading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState({
    "car-news": [],
    "bike-news": [],
    "motor-sports-news": [],
    // "industry": [],
    "marketplace-news": []
  });

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5001/api/car-news");
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const renderNewsSection = (title, newsList) => (
    <div>
      <h2>{title}</h2>
      <br />
      <div className="scroll-wrapper">
        <div className="news-container" style={newsContainerStyle}>
          {newsList
            .filter((item) => item.image)
            .map((item, index) => (
              <div key={index} style={newsCardStyle}>
                <img
                  src={`data:image/jpeg;base64,${item.image}`}
                  alt={item.title}
                  style={newsImageStyle}
                />
                <h3 style={newsTitleStyle}>{item.title}</h3>
                <a href={item.link} target="_blank" rel="noopener noreferrer" style={readMoreStyle}>
                  Read More
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );

  return (
    <div style={containerStyle(darkMode)}>
      <br/>
      <br/>
  <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
  <h2 style={{fontSize:"60px"}}>News</h2>
  </div>
  <br/>
  <br/>
      {loading && <LoadingSpinner darkMode={darkMode} />}
      <style>{globalStyles}</style>
<div style={{padding:"15px"}}>
      {renderNewsSection("Top Car News", newsData["car-news"])}
      <br/>
      <br/>
      {renderNewsSection("Top Bike News", newsData["bike-news"])}
      <br/>
      <br/>
      {renderNewsSection("Motor Sports News", newsData["motor-sports-news"])}
      <br/>
      <br/>
      {/* {renderNewsSection("Industry News", newsData["industry"])} */}
      {renderNewsSection("Marketplace News", newsData["marketplace-news"])}
      </div>
    </div>
  );
};

const LoadingSpinner = ({ darkMode }) => (
  <div style={loadingOverlayStyle(darkMode)}>
    <div style={spinnerStyle(darkMode)} />
  </div>
);

const containerStyle = (darkMode) => ({
  width: "100%",
  minHeight: "100vh",
  backgroundColor: darkMode ? "#1a202c" : "#ffffff",
  color: darkMode ? "#ffffff" : "#000000",
  transition: "background-color 1s ease, color 1s ease",
  padding: "20px",
});

const newsContainerStyle = {
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  paddingBottom: "10px",
  width: "100%",
  scrollBehavior: "smooth",
  WebkitOverflowScrolling: "touch",
};

const newsCardStyle = {
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
  backgroundColor: "#ffffff",
  transition: "transform 0.2s",
  width: "300px",
  height: "350px",
  flexShrink: 0,
};

const newsImageStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "10px",
};

const newsTitleStyle = {
  margin: "10px 0",
  whiteSpace: "normal",
  overflowWrap: "break-word",
  textAlign: "left",
  padding: "10px",
  color:"black"
};

const readMoreStyle = {
  color: "#007bff",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "10px",
};

const loadingOverlayStyle = (darkMode) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: darkMode ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
});

const spinnerStyle = (darkMode) => ({
  border: `4px solid ${darkMode ? "#1a202c" : "#f0f0f0"}`,
  borderTop: `4px solid ${darkMode ? "#ffffff" : "#3498db"}`,
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  animation: "spin 1s linear infinite",
});

const globalStyles = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .news-container {
    overflow-x: auto;
    white-space: nowrap;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .news-container::-webkit-scrollbar {
    display: none;
  }
  .scroll-wrapper {
    position: relative;
    overflow: hidden;
    clip-path: inset(0px 0px 5px 0px);
  }
`;

export default News;
