import React from "react";
import "./projects.css";
import IMG1 from "../../assets/crud.png";
import IMG3 from "../../assets/wedding.png";
import IMG4 from "../../assets/netflix.png";
import IMG5 from "../../assets/cart.png";

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
        <article className="projects__item">
          <img src={IMG4} alt="" />
          <div className="content__teks">
            <h3>Clone Netflix Anime</h3>
            <p>I made a netflix clone, the UI is really good, I'm interested</p>
            <a href="https://reizal-anime.vercel.app/" className="btn">
              CASE STUDY
            </a>
          </div>
        </article>
        <article className="projects__item">
          <img src={IMG5} alt="" />
          <div className="content__teks">
            <h3>E-Commerce</h3>
            <p>I made E-Commerce using React Js and Tailwind Css framework</p>
            <a href="https://shop-six-beryl.vercel.app/" className="btn">
              CASE STUDY
            </a>
          </div>
        </article>
        <article className="projects__item">
          <img src={IMG1} alt="" />
          <div className="content__teks">
            <h3>CRUD</h3>
            <p>
              I made this CRUD using Json-server, React Bootstrap and React js
            </p>
            <a href="#" className="btn">
              CASE STUDY
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Project;
