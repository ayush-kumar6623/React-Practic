import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import FlightPortal from "./Pages/FlightPortal";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/flight-portal" element={<FlightPortal />} />
      </Routes>
    </Router>
  );
};

export default App;
