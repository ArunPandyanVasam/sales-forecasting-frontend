import React from "react";
import { Grid, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./TrainOptions.module.css";

const TrainOptions = () => {
  return (
    <Box className={styles.wrapper}>
      <Typography variant="h4" align="center" className={styles.title}>
        Get Started with Smart Forecasting
      </Typography>

      <Grid
        container
        spacing={3}
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={styles.gridContainer}
      >
        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            component={Link}
            to="/train/file"
            size="small"
            startIcon={<UploadFileIcon />}
            className={styles.buttonPrimary}
          >
            Upload Sales File (CSV/JSON)
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            component={Link}
            to="/train/manual"
            size="small"
            startIcon={<EditIcon />}
            className={styles.buttonSecondary}
          >
            Add Sales Data Manually
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrainOptions;
