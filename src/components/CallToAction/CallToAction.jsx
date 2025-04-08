import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const CallToAction = () => (
  <Box bgcolor="primary.main" color="white" py={5}>
    <Container sx={{ textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Ready to Get Accurate Sales Predictions?
      </Typography>
      <Typography variant="body1" paragraph>
        Start by uploading your data or entering details manually.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/train/file"
        size="large"
      >
        Get Started
      </Button>
    </Container>
  </Box>
);

export default CallToAction;
