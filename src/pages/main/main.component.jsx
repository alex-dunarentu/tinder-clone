import React from "react";
import Person from "../../components/person/person.component";
import Lonely from "../../components/lonely/lonely.component";

const MainPage = ({
  people,
  modifySuperficialChoices,
  alertClassName,
  activeUser,
  likedUsers,
  superLikedUsers,
}) => {
  return (
    <>
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
    </>
  );
};

export default MainPage;
