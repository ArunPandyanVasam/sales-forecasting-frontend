import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const TitleTagline = () => {
  return (
    <Container>
      <Box textAlign="center" sx={{ marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Smart Sales Forecasting and Reorder Recommendations
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Choose how you want to train the model and make predictions
        </Typography>
      </Box>
    </Container>
  );
};

export default TitleTagline;
