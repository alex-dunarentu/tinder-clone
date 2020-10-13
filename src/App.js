import React, { useState } from "react";
import data from "./data.json";

import Header from "./components/header/header.component";
import Person from "./components/person/person.component";
import Lonely from "./components/lonely/lonely.component";
import "./App.css";

const App = () => {
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const [superlikedUsers, setSuperlikedUsers] = useState([]);
  const activeUser = 0;

  const removePersonFromData = (peopleSource, userId) => {
    peopleSource.filter((user) => user.id !== userId);
  };

  const modifySuperficialChoices = (userId, action) => {
    const newPeople = [...people];
    const newLikedUsers = [...likedUsers];
    const newSuperLikedUsers = [...superlikedUsers];
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
        if (!people[activeUser].superLikedUsers.includes(userId)) {
          newPeople[activeUser].superLikedUsers.push(userId);
          newSuperLikedUsers.push(data[userId]);

          setSuperlikedUsers(newSuperLikedUsers);
          setPeople(removePersonFromData(people, userId));
        }
        break;
      default:
        return people;
    }
  };
  return (
    <div className="App">
      <Header />
      {people[1] ? (
        <Person
          person={people[1]}
          modifySuperficialChoices={modifySuperficialChoices}
          likedUsers={likedUsers}
        />
      ) : (
        <Lonely />
      )}
    </div>
  );
};

export default App;
