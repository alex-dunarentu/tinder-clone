import React from "react";
import superlike from "../../assets/misc/superlike.png";

const Superlike = ({ userId, modifySuperficialChoices, alertClassName }) => (
  <button
    className={alertClassName}
    type="button"
    onClick={() => modifySuperficialChoices(userId, "ADD_TO_SUPERLIKED_USERS")}
  >
    <img src={superlike} alt="superlike" />
  </button>
);
export default Superlike;
