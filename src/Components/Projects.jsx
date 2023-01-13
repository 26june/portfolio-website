import React from "react";
import Navbar from "./common/Navbar";
import "../Styles/Projects.css";
import SingleProject from "./common/SingleProject";

export default function Projects() {
  return (
    <div className="Projects">
      <Navbar currentPage={"projects"}></Navbar>

      <div className="projects-list">
        <SingleProject
          link={"https://github.com/26june/nc-games-project"}
          title={"NC HOUSE OF GAMES API"}
          description={
            "A backend service created using node.js, express and postegreSQL"
          }
        ></SingleProject>

        <SingleProject
          link={"https://github.com/26june/nc-games-project-frontend"}
          title={"NC HOUSE OF GAMES FRONTEND"}
          description={
            "A frontend for my backend application. Used Axios for my HTTP requests, built using React styled with Google's MUI library."
          }
        ></SingleProject>

        <SingleProject
          link={"https://northcoders.com/projects/jan-2023/walkerrr"}
          title={"WALKERRR"}
          description={
            "A mobile application that gamifies your walks. You complete quests by walking which rewards you with coins that you can use to buy items in the shop. The tech stack consists of Flutter, MongoDB, Firebase Auth."
          }
        ></SingleProject>

        <SingleProject
          link={"https://github.com/26june/test-wordleV2"}
          title={"WORDLE CLONE"}
          description={
            "A clone of the popular game Wordle created for React practice."
          }
        ></SingleProject>
      </div>
    </div>
  );
}
