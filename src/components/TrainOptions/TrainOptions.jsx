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
        Choose Your Training Method
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
            Upload CSV/JSON File to Train
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
            Enter Manual Input to Train
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrainOptions;
