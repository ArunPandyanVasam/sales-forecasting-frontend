import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import TitleTagline from "../../components/TitleTagline/TitleTagline";
import Footer from "../../components/Footer/Footer";
import TrainOptions from "../../components/TrainOptions/TrainOptions";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <TitleTagline />
      <TrainOptions />
      <Footer />
    </div>
  );
};

export default HomePage;
