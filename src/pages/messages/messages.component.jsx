import React from "react";
import { Link, useHistory } from "react-router-dom";
import data from "../../data.json";
import "./messages.styles.scss";

const MessagesPage = ({ potentialMatches, profileName, profileImage }) => {
  const peopleList = data;
  // make a go back button when going on chat with person
  return (
    <>
      {potentialMatches.length > 0 ? (
        potentialMatches.map((match) => (
          <Link
            to={{
              pathname: `/tinder-clone/messages/${peopleList[match].name}`,
              name: peopleList[match].name,
              image: peopleList[match].image,
            }}
            key={peopleList[match].id}
          >
            <div className="MessagesWrapper">
              <div className="ProfileIcon">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/images/users/${peopleList[match].image}`
                  }
                  alt={peopleList[match].name}
                />
              </div>
              <div className="ProfileFields">
                <span className="ProfileName">{peopleList[match].name}</span>
                <span>Let's hope {peopleList[match].name} likes you too!</span>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="NoMessages">
          {profileName.length > 0 ? (
            <div className="NoMatches">Come back after you liked someone!</div>
          ) : (
            <div className="NoProfile">
              <span className="Instruction">
                You need to create a profile in order to message someone!
              </span>
              <Link to="/tinder-clone/profile">
                <button type="button" className="DoInstruction">
                  Create Profile
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default MessagesPage;
