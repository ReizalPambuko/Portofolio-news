import React from "react";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Header from "./component/header/Header";
import Navs from "./component/navs/Navs";
import Project from "./component/projects/Projects";

const App = () => {
  return (
    <div>
      <Navs />
      <Header />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
