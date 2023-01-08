import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <Link className="home-button" to={"/"}>
        {/* <span className="home-button-icon"></span> */}
        <span className="material-symbols-outlined">home</span>
        <p>HOME</p>
      </Link>

      <Link className="skills-button" to={"/skills"}>
        <span className="material-symbols-outlined">settings</span>
        <p>SKILLS</p>
      </Link>

      <Link className="project-button" to={"/projects"}>
        <span className="material-symbols-outlined">folder_open</span>
        <p>PROJECTS</p>
      </Link>
    </div>
  );
}
