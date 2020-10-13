import React, { useState } from "react";
import data from "./data.json";

import Header from "./components/header/header.component";
import Person from "./components/person/person.component";

import "./App.css";

const App = () => {
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const [superlikedUsers, setSuperlikedUsers] = useState([]);
  activeUser = 0;

  const removePersonFromData = (peopleSource, userId) => {
    peopleSource.filter((user) => user.id !== userId);
  };

  const modifySuperficialChoices = (userId, action) => {
    const newPeople = [...people];
    const newLikedUsers = [...likedUsers];
    const newSuperLikedUsers = [...superlikedUsers];
    const newDislikedUser = [...dislikedUsers];

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
    }
  };
  return (
    <div className="App">
      <Header />
      <Person persons={people} />
    </div>
  );
};

export default App;
