import React from "react";
import "./warning.styles.scss";

const Warning = ({ message, action, superLikeAlertClassName }) => {
  return (
    <div className={superLikeAlertClassName}>
      <span>{message}</span>
      <button type="button" onClick={() => action(false)}>
        Go back
      </button>
    </div>
  );
};

export default Warning;
