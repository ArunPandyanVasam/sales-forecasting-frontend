import React from 'react';
import { Grid, Button, Box, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import EditIcon from '@mui/icons-material/Edit';
import styles from './TrainOptions.module.css';

const TrainOptions = () => {
  return (
    <Box className={styles.container}>
      <Typography variant="h4" align="center" className={styles.title}>
        Choose Your Training Method
      </Typography>
      <Grid container spacing={4} justifyContent="center" className={styles.gridContainer}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={styles.card}>
            <Button
              variant="contained"
              fullWidth
              component={Link}
              to="/train/file"
              startIcon={<UploadFileIcon />}
              className={styles.button}
            >
              Upload Sales File
            </Button>
          </Paper>
        </Grid>

        
      </Grid>
    </Box>
  );
};

export default TrainOptions;
