import React from "react";
import Navbar from "../Components/Navbar";
import "./Css/NetBanking.css";

const NetBanking = () => {
  return (
    <div >
      <Navbar />
   
          <h2>NetBanking Session Active</h2>
          <p>Logged in Customer ID: <strong>1234</strong></p>
        
    </div>
  );
};

export default NetBanking;
