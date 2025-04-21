import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Paper,
} from "@mui/material";
import axios from "axios";
import styles from "./PredictionForm.module.css";

const PredictionForm = () => {
  const [formData, setFormData] = useState({
    product: "",
    historical_sales: "",
    current_stock: "",
    upcoming_event: "",
    order_date: "",
  });

  const [loading, setLoading] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setPredictionResult(null);
    setLoading(true);

    const salesArray = formData.historical_sales
      .split(",")
      .map((val) => parseInt(val.trim()))
      .filter((num) => !isNaN(num));

    const payload = {
      product: formData.product,
      historical_sales: salesArray,
      current_stock: parseInt(formData.current_stock),
      upcoming_event: formData.upcoming_event,
      order_date: formData.order_date,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/predict_sales",
        payload
      );
      if (response.status === 200) {
        setPredictionResult(response.data);
      }
    } catch (error) {
      const message =
        error.response?.data?.error ||
        "Prediction failed. Please try again later.";
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      product: "",
      historical_sales: "",
      current_stock: "",
      upcoming_event: "",
      order_date: "",
    });
    setPredictionResult(null);
    setErrorMessage("");
  };

  return (
    <Box className={styles.formWrapper}>
      {!predictionResult ? (
        <Paper className={styles.paperForm} elevation={3}>
          <Typography variant="h5" align="center" gutterBottom>
            Predict Future Sales
          </Typography>

          <form onSubmit={handleSubmit} className={styles.form}>
            <TextField
              label="Product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />

            {/* <TextField
              label="Historical Sales (comma-separated)"
              name="historical_sales"
              value={formData.historical_sales}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              helperText="e.g. 10, 15, 20"
            /> */}

            <TextField
              label="Current Stock"
              name="current_stock"
              type="number"
              value={formData.current_stock}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />

            <TextField
              label="Upcoming Event"
              name="upcoming_event"
              value={formData.upcoming_event}
              onChange={handleChange}
              fullWidth
              margin="normal"
              placeholder="e.g. Christmas"
            />

            <TextField
              label="Order Date"
              name="order_date"
              type="date"
              value={formData.order_date}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
              className={styles.submitButton}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Predict Sales"
              )}
            </Button>
          </form>

          {errorMessage && (
            <Typography color="error" align="center" mt={2}>
              {errorMessage}
            </Typography>
          )}
        </Paper>
      ) : (
        <Paper className={styles.resultCard} elevation={3}>
          <Typography variant="h5" gutterBottom>
            Prediction Result
          </Typography>

          <Typography><strong>Product:</strong> {predictionResult.product}</Typography>
          <Typography><strong>Order Date:</strong> {predictionResult.order_date}</Typography>
          <Typography><strong>Upcoming Event:</strong> {predictionResult.event}</Typography>
          <Typography><strong>Current Stock:</strong> {predictionResult.current_stock}</Typography>
          <Typography><strong>Predicted Sales (Next Month):</strong> {predictionResult.predicted_sales_next_month}</Typography>
          <Typography><strong>Stock Status:</strong> {predictionResult.stock_status}</Typography>
          <Typography><strong>Reorder Suggestion:</strong> {predictionResult.reorder_suggestion}</Typography>
          <Typography><strong>Reasoning:</strong> {predictionResult.reasoning}</Typography>

          <Button
            variant="outlined"
            color="secondary"
            onClick={handleReset}
            fullWidth
            className={styles.resetButton}
          >
            New Prediction
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default PredictionForm;
