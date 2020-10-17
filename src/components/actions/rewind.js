import React from "react";
import rewind from "../../assets/misc/rewind.png";

const Rewind = ({ modifySuperficialChoices, userId }) => (
  <button
    className="Rewind"
    type="button"
    onClick={() => modifySuperficialChoices(userId, "REWIND")}
  >
    <img src={rewind} alt="rewind" />
  </button>
);
export default Rewind;
