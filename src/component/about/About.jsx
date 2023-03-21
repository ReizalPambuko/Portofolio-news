import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="container__about" id="about">
      <div className="container">
        <div className="judul">
          <h2>ABOUT ME</h2>
          <div className="border__color"></div>
          <p>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className="flex__noAi">
          <div className="about__content">
            <h3>Get to know me!</h3>
            <p>
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.
            </p>
            <p>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
            <a href="#contact" className="btn">
              CONTACT
            </a>
          </div>
          {/* //Skills */}
          <div className="about__skill">
            <h3>My Skills</h3>
            <div className="skill">
              <p className="skills__skill">HTML</p>
              <p className="skills__skill">CSS</p>
              <p className="skills__skill">Javascript</p>
              <p className="skills__skill">React</p>
              <p className="skills__skill">SASS</p>
              <p className="skills__skill">Git</p>
              <p className="skills__skill">Github</p>
              <p className="skills__skill">Bootstrap</p>
              <p className="skills__skill">Tailwind</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
