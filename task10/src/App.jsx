import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import AdminGateway from "./Pages/AdminGateway";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin-gateway" element={<AdminGateway />} />
      </Routes>
    </Router>
  );
};

export default App;
