import React from "react";

import user from "../../assets/misc/user.png";
import logo from "../../assets/misc/logo.png";
import messages from "../../assets/misc/messages.png";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="UserLogo">
        <button className="LogoContainer">
          <img src={user} alt="User" />
        </button>
      </div>
      <div className="TinderLogo">
        <button className="LogoContainer">
          <img src={logo} alt="Logo" />
        </button>
      </div>
      <div className="MessagesLogo">
        <button className="LogoContainer">
          <img src={messages} alt="Messages" />
        </button>
      </div>
    </div>
  );
};

export default Header;
