import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Container>
        <Typography variant="body1" align="center" className={styles.footerText}>
          &copy; {new Date().getFullYear()} Smart Sales Forecasting. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
