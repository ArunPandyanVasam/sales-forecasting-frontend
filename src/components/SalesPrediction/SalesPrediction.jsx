import React from 'react';

const SalesPrediction = ({ predictionData }) => {
  return (
    <div>
      <h2>Sales Prediction</h2>
      <div>
        <p><strong>Product:</strong> {predictionData.product}</p>
        <p><strong>Predicted Sales Next Month:</strong> {predictionData.predicted_sales_next_month} units</p>
        <p><strong>Reorder Suggestion:</strong> {predictionData.reorder_suggestion} units</p>
        <p><strong>Reasoning:</strong> {predictionData.reasoning}</p>
      </div>
    </div>
  );
};

export default SalesPrediction;
