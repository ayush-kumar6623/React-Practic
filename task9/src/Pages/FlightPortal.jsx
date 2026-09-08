import React from "react";
import Navbar from "../Components/Navbar";
import "./Css/FlightPortal.css";

const FlightPortal = () => {
  return (

    <>
      <Navbar />
      <h2>Boarding Pass Ready</h2>
      <p>Passenger: <strong>Amit Kumar</strong> | PNR: <strong>AI-982</strong></p>
    </>

  );
};

export default FlightPortal;
