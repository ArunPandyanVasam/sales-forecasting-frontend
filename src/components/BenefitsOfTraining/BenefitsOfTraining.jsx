import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import styles from './BenefitsOfTraining.module.css'; // Import CSS module

const BenefitsOfTraining = () => {
  return (
    <Box className={styles.benefitsContainer}>
      <Typography variant="h4" className={styles.title}>
        Why Train the Model?
      </Typography>
      <Typography variant="body1" className={styles.subtitle}>
        Training the model enables it to learn from historical data, improving its accuracy and adaptability. Here's why it’s crucial:
      </Typography>
      
      <List className={styles.benefitsList}>
        <ListItem className={styles.benefitItem}>
          <ListItemText primary="Improved Accuracy" />
        </ListItem>
        <ListItem className={styles.benefitItem}>
          <ListItemText primary="Adaptability to Trends" />
        </ListItem>
        <ListItem className={styles.benefitItem}>
          <ListItemText primary="Automation of Predictions" />
        </ListItem>
        <ListItem className={styles.benefitItem}>
          <ListItemText primary="Informed Decision-Making" />
        </ListItem>
        <ListItem className={styles.benefitItem}>
          <ListItemText primary="Personalized Recommendations" />
        </ListItem>
      </List>
    </Box>
  );
};

export default BenefitsOfTraining;
