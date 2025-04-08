import React, { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import FileUploadForm from "../../components/FileUploadForm/FileUploadForm";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CallToAction from "../../components/CallToAction/CallToAction";

const TrainPage = () => {
  const [modelTrained, setModelTrained] = useState(false);

  return (
    <div>

      <Navbar />

      <Container>
        <Box mt={4}>
          <Typography variant="h4" align="center">
            Train Model with File
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Upload your CSV/JSON file to train the model.
          </Typography>

          {!modelTrained ? (
            <FileUploadForm onModelTrained={() => setModelTrained(true)} />
          ) : (
            <Typography variant="h6" align="center">
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
