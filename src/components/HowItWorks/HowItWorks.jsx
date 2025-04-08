import React from 'react';
import { Container, Typography, Stepper, Step, StepLabel } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import InventoryIcon from '@mui/icons-material/Inventory';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

import styles from './HowItWorks.module.css';

const steps = [
  {
    label: 'Upload data or enter manually',
    icon: <UploadFileIcon className={styles.icon} />
  },
  {
    label: 'Train the forecasting model',
    icon: <AutoGraphIcon className={styles.icon} />
  },
  {
    label: 'Enter product data for prediction',
    icon: <InventoryIcon className={styles.icon} />
  },
  {
    label: 'Receive predictions and reorder advice',
    icon: <AssignmentTurnedInIcon className={styles.icon} />
  }
];

const HowItWorks = () => (
  <Container className={styles.container}>
    <Typography variant="h5" align="center" className={styles.heading}>
      How It Works
    </Typography>
    <Stepper alternativeLabel className={styles.stepper}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepLabel
            icon={step.icon}
            className={styles.stepWrapper}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <span className={styles.stepLabel}>{step.label}</span>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  </Container>
);

export default HowItWorks;
