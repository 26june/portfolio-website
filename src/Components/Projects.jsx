import React from "react";
import Navbar from "./common/Navbar";
import "../Styles/Projects.css";

export default function Projects() {
  return (
    <div className="Projects">
      <Navbar currentPage={"projects"}></Navbar>

      <div className="projects-list">
        <a
          href="https://github.com/26june/nc-games-project"
          className="single-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>NC HOUSE OF GAMES API</h2>
          <p>
            A backend service created using node.js, express and postegreSQL
          </p>
        </a>
        <a
          href="https://github.com/26june/nc-games-project-frontend"
          className="single-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>NC HOUSE OF GAMES FRONTEND</h2>
          <p>
            A frontend for my backend application. Used Axios for my HTTP
            requests, built using React styled with Google's MUI library.
          </p>
        </a>
        <a
          href="https://northcoders.com/projects/jan-2023/walkerrr"
          className="single-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>WALKERRR</h2>
          <p>
            A mobile application that gamifies your walks. You complete quests
            by walking which rewards you with coins that you can use to buy
            items in the shop. The tech stack consists of Flutter, MongoDB,
            Firebase Auth.
          </p>
        </a>
        <a
          href="https://github.com/26june/test-wordleV2"
          className="single-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>WORDLE CLONE</h2>
          <p>A clone of the popular game Wordle created for React practice.</p>
        </a>
      </div>
    </div>
  );
}
