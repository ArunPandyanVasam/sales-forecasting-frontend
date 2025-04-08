import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./src/pages/HomePage/HomePage";
import TrainPage from "./src/pages/TrainPage/TrainPage";
import PredictPage from "./src/pages/PredictPage/PredictPage";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/train" element={<TrainPage />} />
      <Route path="/predict" element={<PredictPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
