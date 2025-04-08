import React from 'react';
import { Container, Typography, Stepper, Step, StepLabel } from '@mui/material';
import styles from './HowItWorks.module.css';

const steps = [
  'Upload data or enter manually',
  'Train the forecasting model',
  'Enter product data for prediction',
  'Receive predictions and reorder advice'
];

const HowItWorks = () => (
  <Container className={styles.container}>
    <Typography variant="h5" align="center" className={styles.heading}>
      How It Works
    </Typography>
    <Stepper alternativeLabel className={styles.stepper}>
      {steps.map((label, index) => (
        <Step key={index}>
          <StepLabel className={styles.stepLabel}>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  </Container>
);

export default HowItWorks;
