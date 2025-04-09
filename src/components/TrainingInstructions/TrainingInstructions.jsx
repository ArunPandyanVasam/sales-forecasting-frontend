// src/components/TrainingInstructions/TrainingInstructions.jsx

import React from "react";
import { Typography, List, ListItem, ListItemText, Box } from "@mui/material";
import styles from "./TrainingInstructions.module.css";

const TrainingInstructions = () => {
  return (
    <Box className={styles.instructionsBox}>
      <Typography variant="h6" className={styles.instructionsTitle}>
        How to Use This Page
      </Typography>
      <List className={styles.instructionsList}>
        <ListItem>
          <ListItemText primary="1. Prepare a CSV or JSON file with your sales data." />
        </ListItem>
        <ListItem>
          <ListItemText primary="2. Ensure it contains columns like date, product name, sales, etc." />
        </ListItem>
        <ListItem>
          <ListItemText primary="3. Click the 'Choose File' button to upload your file." />
        </ListItem>
        <ListItem>
          <ListItemText primary="4. Click 'Upload and Train Model' to start training." />
        </ListItem>
        <ListItem>
          <ListItemText primary="5. Wait for confirmation that the model has been trained successfully." />
        </ListItem>
      </List>
    </Box>
  );
};

export default TrainingInstructions;
