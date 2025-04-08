import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import styles from './FeatureHighlights.module.css';

const features = [
  {
    title: 'Smart Forecasting',
    description: 'Predict future sales based on historical data and upcoming events.'
  },
  {
    title: 'Flexible Input',
    description: 'Train the model using CSV/JSON files or enter data manually.'
  },
  {
    title: 'Real-time Suggestions',
    description: 'Get reorder recommendations instantly after prediction.'
  },
  {
    title: 'User-Friendly Design',
    description: 'Clean UI built for ease of use on desktop, tablet, and mobile.'
  }
];

const FeatureHighlights = () => (
  <Container sx={{ mt: 5 }}>
    <Typography variant="h5" align="center" gutterBottom>
      Why Use This Tool?
    </Typography>
    <Grid container spacing={3}>
      {features.map((feat, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <Paper className={styles.featureCard} elevation={3}>
            <Typography variant="h6">{feat.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {feat.description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default FeatureHighlights;
