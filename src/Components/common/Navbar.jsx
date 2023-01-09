import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Navbar.css";

export default function Navbar({ currentPage }) {
  return (
    <div className="Navbar">
      {currentPage === "home" ? (
        <div className="project-button">
          <Link to={"/projects"}>
            <span className="material-symbols-outlined">folder_open</span>
          </Link>
          <p>PROJECTS</p>
        </div>
      ) : (
        <div className="home-button">
          <Link to={"/"}>
            {/* <span className="home-button-icon"></span> */}
            <span className="material-symbols-outlined">home</span>
          </Link>
          <p>HOME</p>
        </div>
      )}
    </div>
  );
}
