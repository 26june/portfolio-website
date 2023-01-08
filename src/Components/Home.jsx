import React from "react";
import "../Styles/Home.css";
import Navbar from "./common/Navbar";

export default function Home() {
  return (
    <div className="Home">
      <div className="left-section"></div>

      <div className="right-section">
        <Navbar></Navbar>
      </div>
    </div>
  );
}
