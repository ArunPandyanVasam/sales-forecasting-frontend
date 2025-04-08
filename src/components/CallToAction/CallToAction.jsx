import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './CallToAction.module.css';

const CallToAction = () => (
  <Box className={styles.container}>
    <Container className={styles.content}>
      <Typography variant="h5" className={styles.heading} gutterBottom>
        Ready to Get Accurate Sales Predictions?
      </Typography>
      <Typography variant="body1" className={styles.subheading} paragraph>
        Start by uploading your data or entering details manually.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/train/file"
        size="large"
        className={styles.button}
      >
        Get Started
      </Button>
    </Container>
  </Box>
);

export default CallToAction;
