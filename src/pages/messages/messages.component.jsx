import React from "react";
import { Link } from "react-router-dom";
import data from "../../data.json";
import "./message.styles.scss";

const MessagesPage = ({ potentialMatches }) => {
  const peopleList = data;
  // make a go back button when going on chat with person
  return (
    <>
      {potentialMatches.length > 0 ? (
        potentialMatches.map((match) => (
          <Link to={`/tinder-clone/messages/${peopleList[match].name}`}>
            <div className="MessageWrapper" key={peopleList[match].id}>
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
        <div className="ProfileNotFound">You must create a profile first.</div>
      )}
    </>
  );
};
export default MessagesPage;
