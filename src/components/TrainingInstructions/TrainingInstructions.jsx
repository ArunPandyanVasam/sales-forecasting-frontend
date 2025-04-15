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
          <Typography className={styles.arrow}>➤</Typography>
          <ListItemText primary=" Prepare a CSV or JSON file with your sales data." />
        </ListItem>
        <ListItem>
          <Typography className={styles.arrow}>➤</Typography>
          <ListItemText primary=" Ensure it contains columns like date, product name, sales, etc." />
        </ListItem>
        <ListItem>
          <Typography className={styles.arrow}>➤</Typography>
          <ListItemText primary=" Click the 'Choose File' button to upload your file." />
        </ListItem>
        <ListItem>
          <Typography className={styles.arrow}>➤</Typography>
          <ListItemText primary=" Click 'Upload and Train Model' to start training." />
        </ListItem>
        <ListItem>
          <Typography className={styles.arrow}>➤</Typography>
          <ListItemText primary=" Wait for confirmation that the model has been trained successfully." />
        </ListItem>
      </List>
    </Box>
  );
};

export default TrainingInstructions;
