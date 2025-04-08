import React from 'react';
import { Grid, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const TrainOptions = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            component={Link}
            to="/train/file"
            size="large"
          >
            Upload CSV/JSON File to Train
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            component={Link}
            to="/train/manual"
            size="large"
          >
            Enter Manual Input to Train
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrainOptions;
