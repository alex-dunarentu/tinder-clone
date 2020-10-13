import React from "react";
import Like from "./like";
import Dislike from "./dislike";
import Superlike from "./superlike";
import "./actions.styles.scss";

const Actions = ({ person, modifySuperficialChoices }) => {
  return (
    <div className="Actions">
      <Like
        modifySuperficialChoices={modifySuperficialChoices}
        userId={person.id}
      />
      <Dislike
        modifySuperficialChoices={modifySuperficialChoices}
        userId={person.id}
      />
      <Superlike
        modifySuperficialChoices={modifySuperficialChoices}
        userId={person.id}
      />
    </div>
  );
};

export default Actions;
