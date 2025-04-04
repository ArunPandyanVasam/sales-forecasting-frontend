import React, { useState } from 'react'
import DataEntryForm from './components/DataEntryForm/DataEntryForm';
import SalesPrediction from './components/SalesPrediction/SalesPrediction';

const App = () => {

  const [predictionData, setPredictionData] = useState(null);
  const handlePrediction = (data) => {
    setPredictionData(data); // Store the prediction data
  };

  return (
    <div>
      <h1>AI-Powered Sales Forecasting</h1>
      <DataEntryForm onPrediction={handlePrediction} />

      {predictionData && <SalesPrediction predictionData={predictionData} /> } 
      
    </div>
  )
}

export default App

