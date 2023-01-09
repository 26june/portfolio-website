import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="home-button">
        <Link to={"/"}>
          {/* <span className="home-button-icon"></span> */}
          <span className="material-symbols-outlined">home</span>
        </Link>
        <p>HOME</p>
      </div>

      <div className="skills-button">
        <Link to={"/skills"}>
          <span className="material-symbols-outlined">settings</span>
        </Link>
        <p>SKILLS</p>
      </div>

      <div className="project-button">
        <Link to={"/projects"}>
          <span className="material-symbols-outlined">folder_open</span>
        </Link>
        <p>PROJECTS</p>
      </div>
    </div>
  );
}
