import React from "react";
import LikedPerson from "../liked-person/liked-person.component";

import "./lonely.styles.scss";

const Lonely = ({ activeUserImage, likedUsers, superLikedUsers }) => (
  <div className="Lonely">
    <p>There's no one new around you.</p>
    <span className="pulse">
      <img src={`${activeUserImage}`} alt="You..." />
    </span>
    <p>
      {likedUsers.length > 0
        ? "People you liked... let's hope they like you too!"
        : ""}
    </p>
    <div className="LikedPeople">
      {likedUsers.map((item) => (
        <LikedPerson key={item.id} person={item} />
      ))}
    </div>
    <p>{superLikedUsers.length > 0 ? "People you super liked!" : ""}</p>
    <div className="SuperLikedPeople">
      {superLikedUsers.map((item) => (
        <LikedPerson key={item.id} person={item} />
      ))}
    </div>
  </div>
);

export default Lonely;
