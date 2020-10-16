import React from "react";
import { useHistory } from "react-router-dom";
import "./warning.styles.scss";

const Warning = ({ message, action, componentClassName, buttonText }) => {
  const history = useHistory();
  let ok = false;
  if (action === "redirect") {
    ok = true;
  }
  return (
    <div className={componentClassName}>
      <span>{message}</span>
      <button
        type="button"
        onClick={() => (ok ? history.push(`/tinder-clone`) : action(false))}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Warning;
