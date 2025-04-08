import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import axios from 'axios';

const ManualInputForm = ({ onModelTrained }) => {
  const [productName, setProductName] = useState('');
  const [historicalSales, setHistoricalSales] = useState('');
  const [currentStock, setCurrentStock] = useState('');
  const [upcomingEvent, setUpcomingEvent] = useState('');
  const [orderDate, setOrderDate] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const inputData = {
      productName,
      historicalSales,
      currentStock,
      upcomingEvent,
      orderDate,
    };

    try {
      // Assuming your backend endpoint is '/train_model'
      const response = await axios.post('http://localhost:5000/train_model', inputData);

      if (response.status === 200) {
        onModelTrained(); // Notify parent that model has been trained
      }
    } catch (error) {
      console.error('Error training model:', error);
      alert('Form submission failed. Please try again.');
    }
  };

  return (
    <Box component="form" onSubmit={handleFormSubmit} display="flex" flexDirection="column" alignItems="center" mt={4}>
      <TextField
        label="Product Name"
        variant="outlined"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Historical Sales"
        variant="outlined"
        value={historicalSales}
        onChange={(e) => setHistoricalSales(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Current Stock"
        variant="outlined"
        value={currentStock}
        onChange={(e) => setCurrentStock(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Upcoming Event"
        variant="outlined"
        value={upcomingEvent}
        onChange={(e) => setUpcomingEvent(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Order Date"
        variant="outlined"
        value={orderDate}
        onChange={(e) => setOrderDate(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit" mt={2}>
        Submit and Train Model
      </Button>
    </Box>
  );
};

export default ManualInputForm;
