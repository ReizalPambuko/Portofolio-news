import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const HeaderSocial = () => {
  return (
    <div className="container__social">
      <a href="https://www.linkedin.com/in/mohammad-reizal-a789b7244/">
        {" "}
        <BsLinkedin className="container__social-icon" />
      </a>
      <a href="">
        {" "}
        <BsTwitter className="container__social-icon" />
      </a>
      <a href="https://www.youtube.com/channel/UCKKd7Ik8mFcM6q7YkgaeG6w">
        {" "}
        <BsYoutube className="container__social-icon" />
      </a>
      <a href="https://github.com/ReizalPambuko">
        {" "}
        <BsGithub className="container__social-icon" />
      </a>
      <a href="https://mail.google.com/mail/u/2/#inbox">
        <SiGmail className=" container__social-icon" />
      </a>
    </div>
  );
};

export default HeaderSocial;