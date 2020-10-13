import React from "react";
import dislike from "../../assets/misc/dislike.png";
const Dislike = ({ userId, modifySuperficialChoices }) => (
  <button
    type="button"
    onClick={() => modifySuperficialChoices(userId, "ADD_TO_DISLIKED_USERS")}
  >
    <img src={dislike} alt="dislike" />
  </button>
);
export default Dislike;
