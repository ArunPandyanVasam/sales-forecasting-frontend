import React, { useState } from 'react';
import axios from 'axios';

const DataEntryForm = ({ onPrediction }) => {
  const [productName, setProductName] = useState('');
  const [historicalSales, setHistoricalSales] = useState('');
  const [currentStock, setCurrentStock] = useState('');
  const [weatherForecast, setWeatherForecast] = useState('');
  const [upcomingEvent, setUpcomingEvent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      product_name: productName,
      historical_sales: historicalSales.split(',').map(Number),
      current_stock: Number(currentStock),
      weather_forecast: weatherForecast,
      upcoming_event: upcomingEvent
    };

    // Send data to the backend API
    axios
      .post('http://127.0.0.1:5000/upload_data', formData)
      .then((response) => {
        // Assuming response contains the prediction data
        onPrediction(response.data); // Pass prediction data to parent
      })
      .catch((error) => {
        console.error('There was an error submitting the data:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product Name:
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Historical Sales (comma separated):
        <input
          type="text"
          value={historicalSales}
          onChange={(e) => setHistoricalSales(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Current Stock:
        <input
          type="number"
          value={currentStock}
          onChange={(e) => setCurrentStock(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Weather Forecast:
        <input
          type="text"
          value={weatherForecast}
          onChange={(e) => setWeatherForecast(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Upcoming Event:
        <input
          type="text"
          value={upcomingEvent}
          onChange={(e) => setUpcomingEvent(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Submit Data</button>
    </form>
  );
};

export default DataEntryForm;
