import React from "react";
import "./projects.css";
import IMG1 from "../../assets/projects1.jpeg";

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
          <img src={IMG1} alt="" />
          <div className="content__teks">
            <h3>Boreal Coffee Clone</h3>
            <p>
              I re-created the frontend of Boreal Coffee's official web app
              because I got attracted to their beautiful UI. It was a great
              experience for me to build the entire frontend.
            </p>
            <a href="" className="btn">
              CASE STUDY
            </a>
          </div>
        </article>
        <article className="projects__item">
          <img src={IMG1} alt="" />
          <div className="content__teks">
            <h3>Boreal Coffee Clone</h3>
            <p>
              I re-created the frontend of Boreal Coffee's official web app
              because I got attracted to their beautiful UI. It was a great
              experience for me to build the entire frontend.
            </p>
            <a href="" className="btn">
              CASE STUDY
            </a>
          </div>
        </article>
        <article className="projects__item">
          <img src={IMG1} alt="" />
          <div className="content__teks">
            <h3>Boreal Coffee Clone</h3>
            <p>
              I re-created the frontend of Boreal Coffee's official web app
              because I got attracted to their beautiful UI. It was a great
              experience for me to build the entire frontend.
            </p>
            <a href="" className="btn">
              CASE STUDY
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Project;
