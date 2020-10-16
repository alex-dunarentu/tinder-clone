import React from "react";

import "./profile.styles.scss";

const ProfilePage = ({ profile }) => {
  const { name, age, desc, image } = profile;
  return (
    <div className="UserProfile">
      <p className="UserName">Hello, {name}!</p>
      <span className="UserInfo">This is how other people see you</span>
      <div className="UserPhoto">
        <img src={image} alt={name} />
      </div>
      <div className="UserDetails">
        <p>
          {name}, {age}
        </p>
        <span>{desc}</span>
      </div>
    </div>
  );
};

export default ProfilePage;
