import React, { useState } from "react";
import send from "../../assets/misc/send.png";
import "./message.styles.scss";

const MessagePage = (props) => {
  const [messaged, setMessaged] = useState(false);
  const [message, setMessage] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    setMessaged(true);
    setMessage("");
  };

  return (
    <div className="MessageWrapper">
      <div className="MessageTip">
        <span>To chat, {props.location.name} must like you back</span>
        <img
          src={process.env.PUBLIC_URL + `/images/users/${props.location.image}`}
          alt="profile pic"
        />
      </div>
      <form className="Message" onSubmit={onSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here"
          required
        ></input>
        <button type="submit" value="submit">
          <img src={send} alt="send icon" />
        </button>
      </form>
      {messaged ? (
        <div className="CanTalk">
          <span>
            Option disabled. You will be notified when {props.location.name}{" "}
            likes you back, then you two can chat!
          </span>
          <button onClick={() => setMessaged(false)}>Ok</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default MessagePage;
