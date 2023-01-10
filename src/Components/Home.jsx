import React, { useEffect } from "react";
import "../Styles/Home.css";
import Navbar from "./common/Navbar";

export default function Home() {
  useEffect(() => {
    const canvas = document.getElementById("snowfall");
    const ctx = canvas.getContext("2d");
    const color = "#eeeeee";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = "block";
    ctx.fillStyle = color;
    ctx.lineWidth = 0.1;
    ctx.strokeStyle = color;
    var dots = { nb: 500, distance: 80, d_radius: 150, array: [] };
    function Dot() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = -0.5 + Math.random();
      this.vy = -0.5 + Math.random();
      this.radius = Math.random();
    }
    Dot.prototype = {
      create: function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
      },
    };
    function makeDots() {
      for (let i = 0; i < dots.nb; i++) {
        dots.array.push(new Dot());
      }
    }
    function moveDots() {
      for (let i = 0; i < dots.nb; i++) {
        var dot = dots.array[i];
        if (dot.y < 0 || dot.y > canvas.height) {
          dot.vx = dot.vx;
          dot.vy = -dot.vy;
        } else if (dot.x < 0 || dot.x > canvas.width) {
          dot.vx = -dot.vx;
          dot.vy = dot.vy;
        }
        dot.x += dot.vx;
        dot.y += dot.vy;
      }
    }
    function animateDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < dots.nb; i++) {
        let dot = dots.array[i];
        dot.create();
      }
      moveDots();
    }
    makeDots();
    setInterval(animateDots, 1000 / 30);
  }, []);

  return (
    <div className="Home">
      <div className="left-section">
        <canvas id="snowfall"></canvas>
        <div className="left-content">
          <img src={require("../Assets/Images/gj.png")} alt="GJ ABORDO"></img>
          <h1>GJ ABORDO</h1>
          <h3>JUNIOR SOFTWARE DEVELOPER</h3>
          <ul>
            <li>
              <a
                href="https://github.com/26june"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/gj-abordo-044345208/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="right-section">
        <Navbar currentPage={"home"}></Navbar>
        <div className="right-content">
          <div>
            <h2>About Me!</h2>
            <p>
              I am a mechatronics engineering student turned coding bootcamp
              gradaute in order to pursue my love for coding!
            </p>
          </div>
          <div>
            <h2>Tech Stack:</h2>

            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Dart/Flutter</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Axios</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Jest</li>
              <li>GitHub</li>
              <li>Linux</li>
              <li>Slack</li>
              <li>Trello</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
