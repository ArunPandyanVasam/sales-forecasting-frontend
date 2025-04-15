import React, { useState } from "react";
import FileUploadForm from "../../components/FileUploadForm/FileUploadForm";
import { Box, Typography, Grid } from "@mui/material";
import styles from "./TrainPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CallToAction from "../../components/CallToAction/CallToAction";
import BenefitsOfTraining from "../../components/BenefitsOfTraining/BenefitsOfTraining";
import FAQBox from "../../components/FAQBox/FAQBox";
import TrainingInstructions from "../../components/TrainingInstructions/TrainingInstructions";
import PredictionForm from "../../components/PredictionForm/PredictionForm";
import salesGraphImage from "../../assets/images/salesGrapgh.jpg";

const TrainPage = () => {
  const [modelTrained, setModelTrained] = useState(false);
  const [trainMessage, setTrainMessage] = useState("");

  const handleModelTrained = (message) => {
    setTrainMessage(message);
    setModelTrained(true);
  };

  return (
    <div className={styles.trainPageWrapper}>
      <Navbar />

      <div className={styles.mainContent}>
        <Grid container spacing={4} justifyContent="space-evenly">
          <Grid item xs={12} md={6} className={styles.gridItem}>
            <BenefitsOfTraining />
          </Grid>
          <Grid item xs={12} md={6} className={styles.gridItem}>
            <TrainingInstructions />
          </Grid>
        </Grid>
      </div>

      <div className={styles.trainContainer}>
        <Box className={styles.trainBox}>
          <Typography variant="h4" align="center" className={styles.title}>
            Train Model with File
          </Typography>
          <Typography variant="body1" align="center" className={styles.subtitle}>
            Upload your CSV/JSON file to train the model.
          </Typography>

          {!modelTrained ? (
            <div className={styles.uploadFormWrapper}>
              <FileUploadForm onModelTrained={handleModelTrained} />
            </div>
          ) : (
            <Typography
              variant="h6"
              align="center"
              className={styles.successMessage}
            >
              {trainMessage}
            </Typography>
          )}
        </Box>
      </div>

      <div className={styles.predictionSection}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} className={styles.predictionFormWrapper}>
            <PredictionForm />
          </Grid>
          <Grid item xs={12} md={6} className={styles.predictionImageWrapper}>
            <div className={styles.imageContainer}>
              <Typography variant="h5" align="center" className={styles.imageTitle}>
                Forecasting Sales Trends
              </Typography>
              <img
                src={salesGraphImage}
                alt="Sales Forecast Graph"
                className={styles.predictionImage}
              />
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={styles.faqSection}>
        <FAQBox />
      </div>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default TrainPage;
