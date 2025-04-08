import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import styles from './TitleTagline.module.css';

const TitleTagline = () => {
  return (
    <Container className={styles.container}>
      <Box className={styles.box}>
        <Typography variant="h4" className={styles.heading} gutterBottom>
          Smart Sales Forecasting and Reorder Recommendations
        </Typography>
        <Typography variant="h6" className={styles.subheading}>
          Choose how you want to train the model and make predictions
        </Typography>
      </Box>
    </Container>
  );
};

export default TitleTagline;
