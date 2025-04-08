import React from 'react';
import { Container, Typography, Stepper, Step, StepLabel } from '@mui/material';

const steps = [
  'Upload data or enter manually',
  'Train the forecasting model',
  'Enter product data for prediction',
  'Receive predictions and reorder advice'
];

const HowItWorks = () => (
  <Container sx={{ mt: 6 }}>
    <Typography variant="h5" align="center" gutterBottom>
      How It Works
    </Typography>
    <Stepper alternativeLabel>
      {steps.map((label, index) => (
        <Step key={index}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  </Container>
);

export default HowItWorks;
