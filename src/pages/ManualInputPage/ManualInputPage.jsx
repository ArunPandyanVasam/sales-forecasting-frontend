import React, { useState } from 'react';
import ManualInputForm from '../../components/ManualInputForm/ManualInputForm';
import { Container, Box, Typography } from '@mui/material';

const ManualInputPage = () => {
  const [modelTrained, setModelTrained] = useState(false);

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" align="center">Train Model with Manual Input</Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Enter product details and historical data to train the model.
        </Typography>
        
        {!modelTrained ? (
          <ManualInputForm onModelTrained={() => setModelTrained(true)} />
        ) : (
          <Typography variant="h6" align="center">Model trained successfully! Now you can make predictions.</Typography>
        )}
      </Box>
    </Container>
  );
};

export default ManualInputPage;
