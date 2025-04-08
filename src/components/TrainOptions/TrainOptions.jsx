import React from "react";
import { Grid, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./TrainOptions.module.css";

const TrainOptions = () => {
  return (
    <Box className={styles.wrapper}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        className={styles.gridContainer}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant="contained"
            fullWidth
            component={Link}
            to="/train/file"
            size="large"
            className={styles.buttonPrimary}
          >
            Upload CSV/JSON File to Train
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant="contained"
            fullWidth
            component={Link}
            to="/train/manual"
            size="large"
            className={styles.buttonSecondary}
          >
            Enter Manual Input to Train
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrainOptions;
