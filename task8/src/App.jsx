import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import DoctorDesk from "./Pages/DoctorDesk";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/doctor-desk" element={<DoctorDesk />} />
      </Routes>
    </Router>
  );
};

export default App;
