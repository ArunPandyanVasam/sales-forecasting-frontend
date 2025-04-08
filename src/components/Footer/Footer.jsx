import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1976d2', color: 'white', padding: 2 }}>
      <Container>
        <Typography variant="body1" align="center">
          &copy; {new Date().getFullYear()} Smart Sales Forecasting. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
