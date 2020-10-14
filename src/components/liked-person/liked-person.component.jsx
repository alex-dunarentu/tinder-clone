import React from "react";

const LikedPerson = ({ person }) => (
  <div className="LikedPerson">
    <img
      src={`tinder-clone/images/users/${person.image}`}
      alt="person you liked"
      className="LikedPersonImage"
    />
  </div>
);

export default LikedPerson;
