import React from "react";
import Navbar from "../Components/Navbar";
import News from "../Components/News";
import AI from "../Components/AI";
import Banner from "../Components/Banner";

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "70px" }} />
     <Banner/>
      <AI/>
      <News />
    </>
  );
};

export default Home;
