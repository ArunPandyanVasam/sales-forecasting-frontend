import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TrainPage from "./pages/TrainPage/TrainPage";
import PredictPage from "./pages/PredictPage/PredictPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/train" element={<TrainPage />} />
        <Route path="/predict" element={<PredictPage />} />
      </Routes>
    </Router>
  );
};

export default App;
