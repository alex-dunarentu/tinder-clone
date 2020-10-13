import React from "react";
import like from "../../assets/misc/like.png";

const Like = ({ userId, modifySuperficialChoices }) => (
  <button
    className="Like"
    type="button"
    onClick={() => modifySuperficialChoices(userId, "ADD_TO_LIKED_USERS")}
  >
    <img src={like} alt="like" />
  </button>
);

export default Like;
