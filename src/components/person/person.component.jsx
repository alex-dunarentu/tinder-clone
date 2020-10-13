import React from "react";

import "./person.styles.scss";

const Person = ({ person }) => {
  const { name, age, desc, image } = person;
  return (
    <div className="Person">
      <div className="PersonPhoto">
        <img src={`/src/assets/users/${image}`} alt={name} />
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
