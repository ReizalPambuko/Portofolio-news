import React from "react";
import "./projects.css";
import IMG1 from "../../assets/projects1.jpeg";
import IMG3 from "../../assets/wedding.png";

const Project = () => {
  return (
    <section className="projects__container" id="projects">
      <div className="container">
        <div className="judul">
          <h2>Projects</h2>
          <div className="border__color"></div>
          <p>
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
        </div>
        <article className="projects__item">
          <img src={IMG3} alt="" />
          <div className="content__teks">
            <h3>Wedding</h3>
            <p>
              I created this Wedding website because I'm interested in a good UI
            </p>
            <a href="https://Wedding.mrcap.repl.co" className="btn">
              CASE STUDY
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Project;
