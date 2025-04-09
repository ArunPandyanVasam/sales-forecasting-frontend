import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import TitleTagline from "../../components/TitleTagline/TitleTagline";
import Footer from "../../components/Footer/Footer";
import TrainOptions from "../../components/TrainOptions/TrainOptions";
import FeatureHighlights from "../../components/FeatureHighlights/FeatureHighlights";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import CallToAction from "../../components/CallToAction/CallToAction";
import styles from './HomePage.module.css';
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";

const HomePage = () => {
  return (
    <div className={styles.homePageWrapper}>
      <Navbar />
      <HeroCarousel />
      <TitleTagline />
      <TrainOptions />
      <FeatureHighlights />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;
