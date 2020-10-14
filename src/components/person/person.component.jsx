import React from "react";
import Actions from "../actions/actions.component";
import "./person.styles.scss";

const Person = ({ person, modifySuperficialChoices, alertClassName }) => {
  const { name, age, desc, image } = person;
  return (
    <>
      <div className="Person">
        <div className="PersonPhoto">
          <img
            src={process.env.PUBLIC_URL + `/images/users/${image}`}
            alt={name}
          />
        </div>
        <div className="PersonDescription">
          <p>
            {name}, {age}
          </p>
          <span>{desc}</span>
        </div>
      </div>
      <Actions
        modifySuperficialChoices={modifySuperficialChoices}
        person={person}
        alertClassName={alertClassName}
      />
    </>
  );
};

export default Person;
