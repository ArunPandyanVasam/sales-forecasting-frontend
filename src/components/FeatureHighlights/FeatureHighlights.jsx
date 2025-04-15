import React from "react";
import { Grid, Typography, Box, Paper } from "@mui/material";
import styles from "./FeatureHighlights.module.css";

const FeatureHighlights = () => {
  const features = [
    {
      title: "Smart Forecasting",
      description:
        "Predict sales with smart algorithms and accurate data analysis.",
    },
    {
      title: "Sales Growth",
      description: "Track the growth of your sales and optimize inventory.",
    },
    {
      title: "Real-time Suggestions",
      description: "Receive quick and reliable sales and reorder suggestions.",
    },
    {
      title: "User Friendly",
      description:
        "An intuitive interface designed for ease of use on any device.",
    },
  ];

  return (
    <Box className={styles.container}>
      <Typography variant="h4" align="center" className={styles.title}>
        Pepper's Game-Changing Features for Your Success
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper className={styles.featureCard}>
              <Typography variant="h6" className={styles.featureTitle}>
                {feature.title}
              </Typography>
              <Typography variant="body2" className={styles.featureDescription}>
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeatureHighlights;
