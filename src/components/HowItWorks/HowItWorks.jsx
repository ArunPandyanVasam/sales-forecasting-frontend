import React from 'react';
import { Container, Typography, Stepper, Step, StepLabel, Box } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import InventoryIcon from '@mui/icons-material/Inventory';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

import styles from './HowItWorks.module.css';

const steps = [
  { label: 'Easily upload or input your sales data', icon: <UploadFileIcon /> },
  { label: 'Let Pepper train a smart forecasting model for you', icon: <AutoGraphIcon /> },
  { label: 'Provide product details to get instant insights', icon: <InventoryIcon /> },
  { label: 'Receive actionable predictions and reorder guidance', icon: <AssignmentTurnedInIcon /> },
];

const HowItWorks = () => (
  <Container className={styles.container} maxWidth="lg">
    <Typography variant="h4" className={styles.heading} gutterBottom>
      How It Works
    </Typography>
    <Stepper alternativeLabel className={styles.stepper} nonLinear>
      {steps.map((step, index) => (
        <Step key={index} className={styles.step}>
          <StepLabel
            StepIconComponent={() => (
              <Box className={styles.iconWrapper} aria-hidden="true">
                {React.cloneElement(step.icon, { className: styles.icon })}
              </Box>
            )}
            className={styles.stepLabel}
            style={{ animationDelay: `${index * 0.25}s` }}
          >
            <span className={styles.stepText}>{step.label}</span>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  </Container>
);

export default HowItWorks;
