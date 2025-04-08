import React, { useState } from 'react';
import FileUploadForm from '../../components/FileUploadForm/FileUploadForm';
import { Container, Box, Typography } from '@mui/material';

const TrainPage = () => {
  const [modelTrained, setModelTrained] = useState(false);

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" align="center">Train Model with File</Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Upload your CSV/JSON file to train the model.
        </Typography>
        
        {!modelTrained ? (
          <FileUploadForm onModelTrained={() => setModelTrained(true)} />
        ) : (
          <Typography variant="h6" align="center">Model trained successfully! Now you can make predictions.</Typography>
        )}
      </Box>
    </Container>
  );
};

export default TrainPage;
