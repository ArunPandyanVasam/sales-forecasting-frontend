import React from "react";
import { Typography, Container, Box } from "@mui/material";
import styles from "./TitleTagline.module.css";

const TitleTagline = () => {
  return (
    <Container className={styles.container}>
      <Box className={styles.box}>
        <Typography variant="h4" className={styles.heading} gutterBottom>
          Built for Distributors: Smarter Forecasting, Simpler Reordering
        </Typography>
        <Typography variant="h6" className={styles.subheading}>
          Upload your sales data or enter it manually — get instant predictions
          and reorder guidance, tailored to your business.
        </Typography>
      </Box>
    </Container>
  );
};

export default TitleTagline;
