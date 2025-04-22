import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TrainPage from "./pages/TrainPage/TrainPage";

import './index.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/train/file" element={<TrainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
