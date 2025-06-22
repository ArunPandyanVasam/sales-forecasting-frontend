import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import TitleTagline from "../../components/TitleTagline/TitleTagline";
import TrainOptions from "../../components/TrainOptions/TrainOptions";
import FeatureHighlights from "../../components/FeatureHighlights/FeatureHighlights";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import CallToAction from "../../components/CallToAction/CallToAction";
import Footer from "../../components/Footer/Footer";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      <HeroCarousel />
      <TitleTagline />

      <section className={styles.splitSection}> 
        <div className={styles.leftPane}>
          <TrainOptions />
        </div>
        <div className={styles.rightPane}>
          <FeatureHighlights />
        </div>
      </section>

      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;