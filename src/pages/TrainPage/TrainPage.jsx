import React, { useState } from "react";
import FileUploadForm from "../../components/FileUploadForm/FileUploadForm";
import { Container, Box, Typography } from "@mui/material";
import styles from "./TrainPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CallToAction from "../../components/CallToAction/CallToAction";

const TrainPage = () => {
  const [modelTrained, setModelTrained] = useState(false);

  return (
    <div className={styles.trainPageWrapper}>
      <Navbar />
      <Container className={styles.trainContainer}>
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
              <FileUploadForm onModelTrained={() => setModelTrained(true)} />
            </div>
          ) : (
            <Typography
              variant="h6"
              align="center"
              className={styles.successMessage}
            >
              Model trained successfully! Now you can make predictions.
            </Typography>
          )}
        </Box>
      </Container>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default TrainPage;
