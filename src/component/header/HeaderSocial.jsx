import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="container__social">
      <BsLinkedin className="container__social-icon" />
      <BsTwitter className="container__social-icon" />
      <BsYoutube className="container__social-icon" />
      <BsGithub className="container__social-icon" />
    </div>
  );
};

export default HeaderSocial;
