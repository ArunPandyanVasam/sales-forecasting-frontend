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
          {/* Benefits Section */}
          <Grid item xs={12} md={6} className={styles.gridItem}>
            <BenefitsOfTraining />
          </Grid>

          {/* Training Instructions Section */}
          <Grid item xs={12} md={6} className={styles.gridItem}>
            <TrainingInstructions />
          </Grid>
        </Grid>
      </div>

      {/* File Upload Section */}
      <div className={styles.trainContainer}>
        <Box className={styles.trainBox}>
          <Typography variant="h4" align="center" className={styles.title}>
            Train Model with File
          </Typography>
          <Typography
            variant="body1"
            align="center"
            className={styles.subtitle}
          >
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

      <PredictionForm />

      {/* FAQ Section */}
      <div className={styles.faqSection}>
        <FAQBox />
      </div>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default TrainPage;
