import React, { useState } from "react";
import "./navs.css";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Navs = () => {
  const [navs, setNavs] = useState(false);
  return (
    <div className="navs">
      <div className="containers">
        <div className="d__flex">
          <h2>Mohammad Reizal</h2>
          <ul className={navs ? "mobile" : "desktop"}>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
          <div onClick={() => setNavs(!navs)} className="bars">
            {navs ? <MdClose /> : <HiMenuAlt1 />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navs;
