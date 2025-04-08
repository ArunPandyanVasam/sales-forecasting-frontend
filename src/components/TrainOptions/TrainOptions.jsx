import React from 'react';
import { Grid, Button, Box } from '@mui/material';

const TrainOptions = ({ onTrainingOptionSelect }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => onTrainingOptionSelect('file')}
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
            onClick={() => onTrainingOptionSelect('manual')}
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
