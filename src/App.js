import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";

import MainPage from "./pages/main/main.component";
import ProfileCreation from "./pages/profile-creation/profile-creation.component";
import ProfilePage from "./pages/profile/profile.component";
import MessagesPage from "./pages/messages/messages.component";
import MessagePage from "./pages/message/message.component.jsx";

import Header from "./components/header/header.component";
import Warning from "./components/warning/warning.component";

import data from "./data.json";

import "./App.css";
import userEvent from "@testing-library/user-event";

const App = () => {
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const [superLikedUsers, setSuperLikedUsers] = useState([]);

  const [alertSuperLike, setAlertSuperLike] = useState(false);
  const [graySuperLike, setGraySuperLike] = useState(false);
  const [triggerRender, setTriggerRender] = useState(false);
  const activeUser = 0;

  let superLikeAlertClassName = `SuperLikeAlert ${
    alertSuperLike ? "IsActive" : ""
  }`;

  let alertClassName = `Superlike ${graySuperLike ? "NotAllowed" : ""}`;

  const removePersonFromData = (peopleSource, userId) => {
    const newFilteredPeople = peopleSource.filter((user) => user.id !== userId);
    return newFilteredPeople;
  };

  const modifySuperficialChoices = (userId, action) => {
    const newPeople = [...people];
    const newLikedUsers = [...likedUsers];
    const newSuperLikedUsers = [...superLikedUsers];
    const newDislikedUsers = [...dislikedUsers];

    switch (action) {
      case "ADD_TO_LIKED_USERS":
        if (!people[activeUser].likedUsers.includes(userId)) {
          newPeople[activeUser].likedUsers.push(userId);
          newLikedUsers.push(data[userId]);

          setLikedUsers(newLikedUsers);
          setPeople(removePersonFromData(people, userId));
        }
        break;
      case "ADD_TO_DISLIKED_USERS":
        if (!people[activeUser].dislikedUsers.includes(userId)) {
          newPeople[activeUser].dislikedUsers.push(userId);
          newDislikedUsers.push(data[userId]);

          setDislikedUsers(newDislikedUsers);
          setPeople(removePersonFromData(people, userId));
        }
        break;
      case "ADD_TO_SUPERLIKED_USERS":
        if (
          !people[activeUser].superLikedUsers.includes(userId) &&
          superLikedUsers.length === 0
        ) {
          newPeople[activeUser].superLikedUsers.push(userId);
          newSuperLikedUsers.push(data[userId]);

          setGraySuperLike(true);
          setSuperLikedUsers(newSuperLikedUsers);
          setPeople(removePersonFromData(people, userId));
        } else {
          setAlertSuperLike(true);
        }
        break;
      case "REWIND":
        alert("You tried to use a paid feature that is cooming soon.")
        break;
      default:
        return people;
    }
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/tinder-clone"
          render={() =>
            people[activeUser].name.length > 0 ? (
              <MainPage
                people={people}
                modifySuperficialChoices={modifySuperficialChoices}
                alertClassName={alertClassName}
                activeUser={activeUser}
                likedUsers={likedUsers}
                superLikedUsers={superLikedUsers}
              />
            ) : (
              <div className="ProfileNotCreated">
                <span>
                  After your profile is finished, come back here and meet new
                  people!
                </span>
                <Link to="/tinder-clone/profile">
                  <button type="button">Create Profile</button>
                </Link>
              </div>
            )
          }
        />
        <Route
          exact
          path="/tinder-clone/profile"
          render={() =>
            triggerRender ? (
              <ProfilePage profile={people[activeUser]} />
            ) : (
              <ProfileCreation
                setTriggerRender={setTriggerRender}
                profile={people[activeUser]}
              />
            )
          }
        />
        <Route
          exact
          path="/tinder-clone/messages"
          render={() => (
            <MessagesPage
              potentialMatches={people[activeUser].likedUsers}
              matches={people[activeUser].superLikedUsers}
              profileName={people[activeUser].name}
              profileImage={people[activeUser].image}
            />
          )}
        />
        <Route path="/tinder-clone/messages/" component={MessagePage} />
      </Switch>
      {alertSuperLike ? (
        <Warning
          componentClassName={superLikeAlertClassName}
          message={"You only have one SuperLike per day."}
          action={setAlertSuperLike}
          buttonText={"Go back"}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
