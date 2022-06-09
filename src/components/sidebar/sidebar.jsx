import React from "react";
import "./sidebar.styles.css";
import HomeIcon from "../../assets/home.png";
import AboutIcon from "../../assets/about.png";
import ProjectIcon from "../../assets/projects.png";
import ExperienceIcon from "../../assets/experience.png";
import ContactIcon from "../../assets/contact.png";
import Logo from "../../assets/iconx.png";

const Sidebar = () => {
  return (
    <div className="side_bar">
      <img className="logo" src={Logo} alt="" />

      <div className="nav-option">
        <ul>
          <li>
            <img className="icons1" src={HomeIcon} alt="" />
            Home
          </li>
          <li>
            <img className="icons1" src={AboutIcon} alt="" />
            About
          </li>
          <li>
            <img className="icons1" src={ProjectIcon} alt="" />
            Projects
          </li>
          <li>
            <img className="icons1" src={ExperienceIcon} alt="" />
            Experiences
          </li>
          <li>
            <img className="icons1" src={ContactIcon} alt="" />
            Contact
          </li>
        </ul>
      </div>

      <div />
    </div>
  );
};

export default Sidebar;
