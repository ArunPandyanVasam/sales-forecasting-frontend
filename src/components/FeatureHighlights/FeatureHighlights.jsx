import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import BoltIcon from '@mui/icons-material/Bolt';
import DevicesIcon from '@mui/icons-material/Devices';

import styles from './FeatureHighlights.module.css';

const features = [
  {
    title: 'Smart Forecasting',
    description: 'Predict future sales based on historical data and upcoming events.',
    icon: <BarChartIcon className={styles.icon} />,
  },
  {
    title: 'Flexible Input',
    description: 'Train the model using CSV/JSON files or enter data manually.',
    icon: <UploadFileIcon className={styles.icon} />,
  },
  {
    title: 'Real-time Suggestions',
    description: 'Get reorder recommendations instantly after prediction.',
    icon: <BoltIcon className={styles.icon} />,
  },
  {
    title: 'User-Friendly Design',
    description: 'Clean UI built for ease of use on desktop, tablet, and mobile.',
    icon: <DevicesIcon className={styles.icon} />,
  },
];

const FeatureHighlights = () => (
  <Container className={styles.container}>
    <Typography variant="h5" align="center" className={styles.heading}>
      Why Use This Tool?
    </Typography>
    <Grid container spacing={3} className={styles.grid}>
      {features.map((feat, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <Paper
            className={styles.featureCard}
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            <div className={styles.iconWrapper}>{feat.icon}</div>
            <Typography variant="h6" className={styles.cardTitle}>
              {feat.title}
            </Typography>
            <Typography variant="body2" className={styles.cardDescription}>
              {feat.description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default FeatureHighlights;
