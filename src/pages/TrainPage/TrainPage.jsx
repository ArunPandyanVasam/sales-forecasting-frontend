import React, { useState } from "react";
import { motion } from "framer-motion";
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
import WhyPredictSales from "../../components/WhyPredictSales/WhyPredictSales";

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

      {/* Animated Benefits + Instructions Section */}
      <div className={styles.mainContent}>
        <Grid container spacing={4} justifyContent="space-evenly">
          <Grid item xs={12} md={6} className={styles.gridItem}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <BenefitsOfTraining />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6} className={styles.gridItem}>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <TrainingInstructions />
            </motion.div>
          </Grid>
        </Grid>
      </div>

      {/* Animated Train Box */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
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
      </motion.div>

      {/* Animated Prediction + Why Predict Section */}
      <div className={styles.predictionSection}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} className={styles.predictionFormWrapper}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              <PredictionForm />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6} className={styles.whyPredictWrapper}>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            >
              <WhyPredictSales />
            </motion.div>
          </Grid>
        </Grid>
      </div>

      {/* Animated FAQ Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
      >
        <div className={styles.faqSection}>
          <FAQBox />
        </div>
      </motion.div>

      {/* Subtle fade-in for CTA and Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default TrainPage;
