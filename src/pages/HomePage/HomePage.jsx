import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import TitleTagline from "../../components/TitleTagline/TitleTagline";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import TrainOptions from "../../components/TrainOptions/TrainOptions";

const HomePage = () => {
  const navigate = useNavigate();  // Hook for navigation

  const handleTrainingOption = (option) => {
    if (option === 'file') {
      navigate('/train');  // Navigate to TrainPage (with file upload option)
    } else if (option === 'manual') {
      navigate('/train');  // Navigate to TrainPage (with manual input option)
    }
  };

  return (
    <div>
      <Navbar />
      <TitleTagline />
      <TrainOptions onSelectOption={handleTrainingOption} />
      <Footer />
    </div>
  );
};

export default HomePage;
