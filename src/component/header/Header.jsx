import React from "react";
import "./header.css";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <section className="container__header">
      <div className="container">
        <div className="content__header">
          <h1>HEY, I'M MOHAMMAD REIZAL</h1>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
          <a href="#projects" className="btn__header">
            PROJECTS
          </a>
        </div>
        <HeaderSocial />
      </div>
    </section>
  );
};

export default Header;
