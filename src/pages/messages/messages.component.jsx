import React from "react";
import { Link } from "react-router-dom";
import data from "../../data.json";
import "./messages.styles.scss";

const MessagesPage = ({ potentialMatches, matches, profileName }) => {
  const peopleList = data;
  const matchesList = [...potentialMatches];
  if (matches.length) matchesList.push(matches[0]);
  // make a go back button when going on chat with person
  return (
    <>
      {matchesList.length > 0 ? (
        matchesList.map((match) => (
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
                {matches[0] === peopleList[match].id ? (
                  <span>
                    You superliked {peopleList[match].name}, notification sent!
                  </span>
                ) : (
                  <span>
                    Let's hope {peopleList[match].name} will like you too!
                  </span>
                )}
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
