import React from "react";
import "./person.styles.scss";

const Person = ({ person, modifySuperficialChoices, likedUsers }) => {
  const { name, age, desc, image } = person;
  return (
    <div className="Person">
      <div className="PersonPhoto">
        <img
          src={process.env.PUBLIC_URL + `/images/users/${image}`}
          alt={name}
          id={1}
        />
      </div>
      <div className="PersonDescription">
        <p>
          {name}, {age}
        </p>
        <span>{desc}</span>
      </div>
    </div>
  );
};

export default Person;
