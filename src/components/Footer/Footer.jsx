import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Container maxWidth="lg" className={styles.container}>
        <Typography variant="body2" align="center" className={styles.footerText}>
          &copy; {new Date().getFullYear()} Smart Sales Forecasting. All Rights Reserved. {' '}
          <Link href="https://yourcompanysite.com" target="_blank" rel="noopener" className={styles.link}>
            YourCompany
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
