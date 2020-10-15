import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import Person from "./components/person/person.component";
import Lonely from "./components/lonely/lonely.component";
import Warning from "./components/warning/warning.component";

import data from "./data.json";

import "./App.css";

const App = () => {
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const [superLikedUsers, setSuperLikedUsers] = useState([]);

  const [alertSuperLike, setAlertSuperLike] = useState(false);
  const [graySuperLike, setGraySuperLike] = useState(false);
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
      default:
        return people;
    }
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        {people[1] ? (
          <Person
            key={people[1].id}
            person={people[1]}
            modifySuperficialChoices={modifySuperficialChoices}
            alertClassName={alertClassName}
          />
        ) : (
          <Lonely
            activeUserImage={people[activeUser].image}
            likedUsers={likedUsers}
            superLikedUsers={superLikedUsers}
          />
        )}
        {alertSuperLike ? (
          <Warning
            superLikeAlertClassName={superLikeAlertClassName}
            message={"You only have one SuperLike per day."}
            action={setAlertSuperLike}
          />
        ) : (
          ""
        )}
      </Switch>
    </div>
  );
};

export default App;
