import React from "react";
import { useHistory } from "react-router-dom";
import "./warning.styles.scss";

const Warning = ({
  message,
  action,
  actionMessage,
  componentClassName,
  buttonText,
}) => {
  const history = useHistory();
  let ok = false;
  if (actionMessage === "redirect") {
    ok = true;
  }
  const multipleFunc = () => {
    action(true);
    history.push(`/tinder-clone`);
  };
  return (
    <div className={componentClassName}>
      <span>{message}</span>
      <button
        type="button"
        onClick={() => (ok ? multipleFunc() : action(false))}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Warning;
