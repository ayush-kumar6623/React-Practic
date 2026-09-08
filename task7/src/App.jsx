import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import NetBanking from "./Pages/NetBanking";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/netbanking" element={<NetBanking />} />
      </Routes>
    </Router>
  );
};

export default App;
