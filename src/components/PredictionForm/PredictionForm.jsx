import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert historical_sales string to array of numbers
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

    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/predict_sales",
        payload
      );
      if (response.status === 200) {
        setPredictionResult(response.data);
      }
    } catch (error) {
      console.error("Prediction failed:", error);
      alert("Prediction failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className={styles.formWrapper}>
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

        <TextField
          label="Historical Sales (comma separated)"
          name="historical_sales"
          value={formData.historical_sales}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />

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

      {predictionResult && (
        <Box className={styles.resultBox}>
          <Typography variant="h6">Prediction Result:</Typography>
          <Typography>Product: {predictionResult.product}</Typography>
          <Typography>
            Predicted Sales Next Month:{" "}
            {predictionResult.predicted_sales_next_month}
          </Typography>
          <Typography>Reasoning: {predictionResult.reasoning}</Typography>
          <Typography>
            Reorder Suggestion: {predictionResult.reorder_suggestion}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default PredictionForm;
