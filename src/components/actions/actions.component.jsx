import React from "react";
import Like from "./like";
import Dislike from "./dislike";
import Rewind from "./rewind";
import Superlike from "./superlike";
import "./actions.styles.scss";

const Actions = ({ person, modifySuperficialChoices, alertClassName }) => {
  return (
    <div className="Actions">
      <Rewind
        modifySuperficialChoices={modifySuperficialChoices}
        userId={person.id}
      />
      <Dislike
        modifySuperficialChoices={modifySuperficialChoices}
        userId={person.id}
      />
      <Like
        modifySuperficialChoices={modifySuperficialChoices}
        userId={person.id}
      />

      <Superlike
        modifySuperficialChoices={modifySuperficialChoices}
        userId={person.id}
        alertClassName={alertClassName}
      />
    </div>
  );
};

export default Actions;
