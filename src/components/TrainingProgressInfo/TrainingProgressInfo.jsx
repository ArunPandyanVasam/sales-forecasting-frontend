import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import styles from './TrainingProgressInfo.module.css'; // Import CSS module

const TrainingProgressInfo = () => {
  return (
    <Box className={styles.progressContainer}>
      <CircularProgress size={50} className={styles.circularProgress} />
      <Typography variant="h6" className={styles.message}>
        We’re training your model... please don’t refresh the page.
      </Typography>
    </Box>
  );
};

export default TrainingProgressInfo;
