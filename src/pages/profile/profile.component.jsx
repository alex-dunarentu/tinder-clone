import React, { useState } from "react";
import ImageUploading from "react-images-uploading";

import "./profile.styles.scss";

const ProfilePage = () => {
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [desc, setDesc] = useState("");

  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const onSubmit = () => {
    //sa setez people[activeUser] cu datele astea
    alert(`We're good ${name}!`);
    //aici sa fac un pop up cu Ok, si buton go and meet new people
  };
  console.log(name);
  return (
    <div className="ProfilePage">
      <div className="Title">
        <h1>Welcome to Tinder!</h1>
        <span>(* a tinder clone made by Alex Dunarentu)</span>
      </div>
      <div className="ProfileCreation">
        <span>Step 1</span>
        <p>Let's start by letting people know how you look!</p>

        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            /* onImageRemoveAll, */
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="UploadProfileImage">
              {images.length > 0 ? (
                ""
              ) : (
                <button
                  style={isDragging ? { color: "white" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </button>
              )}
              &nbsp;
              {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
              {imageList.map((image, index) => (
                <div key={index} className="ProfileImage">
                  <img src={image["data_url"]} alt="" width="100" />
                  <div className="ImageButtonsWrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
        <span>Step 2</span>
        <p>Tell us about you!</p>
        <form onSubmit={onSubmit}>
          <div>
            <label>Your name:</label>
            <input
              className="ProfileName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Describe yourself:</label>
            <input
              className="ProfileDescription"
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
            />
          </div>
          <div>
            <label>How old are you?</label>
            <input
              className="ProfileAge"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <input type="submit" value="Save!" className="SubmitButton" />
        </form>
      </div>
    </div>
  );
};
export default ProfilePage;
