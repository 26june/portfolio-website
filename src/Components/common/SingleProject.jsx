import React from "react";

export default function SingleProject({ link, title, description }) {
  return (
    <a
      href={link}
      className="single-project"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </a>
  );
}
