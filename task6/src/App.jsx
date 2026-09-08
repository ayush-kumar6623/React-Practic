import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import StudentPortal from "./Pages/StudentPortal";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student-portal" element={<StudentPortal />} />
      </Routes>
    </Router>
  );
};

export default App;
