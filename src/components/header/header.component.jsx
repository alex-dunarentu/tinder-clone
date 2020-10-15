import React from "react";
import { Link } from "react-router-dom";

import user from "../../assets/misc/user.png";
import logo from "../../assets/misc/logo.png";
import messages from "../../assets/misc/messages.png";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="UserLogo">
        <Link to="/tinder-clone/profile">
          <button className="LogoContainer">
            <img src={user} alt="User" />
          </button>
        </Link>
      </div>
      <div className="TinderLogo">
        <Link to="/tinder-clone">
          <button className="LogoContainer">
            <img src={logo} alt="Logo" />
          </button>
        </Link>
      </div>
      <div className="MessagesLogo">
        <Link to="/tinder-clone/messages">
          <button className="LogoContainer">
            <img src={messages} alt="Messages" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
