import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./App.css";
import "./download.png";

function Create() {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameBlur, setEnteredNameBlur] = useState(false);
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredLastNameBlur, setEnteredLastNameBlur] = useState(false);
  const [enteredPostTag, setEnteredPostTag] = useState("");
  const [enteredPostTagBlur, setEnteredPostTagBlur] = useState(false);
  const [enteredComment, setEnteredComment] = useState("");
  const [enteredCommentBlur, setEnteredCommentBlur] = useState(false);
  const [enteredImage, setEnteredImage] = useState("");

  const enteredNameIsValid = enteredName !== "";
  const enteredNameIsInvalid = !enteredNameIsValid && enteredNameBlur;

  const enteredLastNameIsValid = enteredLastName !== "";
  const enteredLastNameIsInvalid =
    !enteredLastNameIsValid && enteredLastNameBlur;

  const enteredPostTagIsValid = enteredPostTag !== "";
  const enteredPostTagIsInvalid = !enteredPostTagIsValid && enteredPostTagBlur;

  const enteredCommentIsValid = enteredComment !== "";
  const enteredCommentIsInvalid = !enteredCommentIsValid && enteredCommentBlur;

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const nameBlurHandler = () => {
    setEnteredNameBlur(true);
  };

  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };
  const lastNameBlurHandler = () => {
    setEnteredLastNameBlur(true);
  };

  const tagsChangeHandler = (event) => {
    setEnteredPostTag(event.target.value);
  };
  const tagsBlurHandler = () => {
    setEnteredPostTagBlur(true);
  };

  const commentChangeHandler = (event) => {
    setEnteredComment(event.target.value);
  };

  const commentBlurHandler = () => {
    setEnteredCommentBlur(true);
  };

  const imageUploadHandler = (event) => {
    setEnteredImage(event.target.files[0]);
  };

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredLastNameIsValid &&
    enteredPostTagIsValid &&
    enteredCommentIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    } else {
      const postData = {
        name: enteredName,
        lastName: enteredLastName,
        teg: enteredPostTag,
        comment: enteredComment,
        image: enteredImage,
      };

      console.log(postData);
      setEnteredName("");
      setEnteredLastName("");
      setEnteredPostTag("");
      setEnteredComment("");
    }
  };

  const enteredNameClasses = enteredNameIsInvalid
    ? "post-form invalid"
    : "post-form";
  const enteredLastNameClasses = enteredLastNameIsInvalid
    ? "post-form invalid"
    : "post-form";

  const enteredTagsClasses = enteredPostTagIsInvalid
    ? "post-form invalid"
    : "post-form";

  const enteredCommentClasses = enteredCommentIsInvalid
    ? "post-form invalid"
    : "post-form";

  return (
    <div className="create">
      <form onSubmit={submitHandler}>
        <div className={enteredNameClasses}>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            className="text-input"
            placeholder="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          ></input>
          {enteredNameIsInvalid && (
            <p className="error-text">name must not be empty</p>
          )}
        </div>
        <div className={enteredLastNameClasses}>
          <label for="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            className="text-input"
            placeholder="last name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          ></input>
          {enteredLastNameIsInvalid && (
            <p className="error-text">last name must not be empty</p>
          )}
        </div>

        <div className={enteredTagsClasses}>
          <label for="tags">Tags</label>
          <input
            type="text"
            id="tags"
            className="text-input"
            placeholder="tags"
            onChange={tagsChangeHandler}
            onBlur={tagsBlurHandler}
            value={enteredPostTag}
          ></input>
          {enteredPostTagIsInvalid && (
            <p className="error-text">tag must not be empty</p>
          )}
        </div>
        <div className={enteredCommentClasses}>
          <label for="comment">Comment</label>
          <input
            type="text"
            id="comment"
            className="text-input"
            placeholder="comment"
            onChange={commentChangeHandler}
            onBlur={commentBlurHandler}
            value={enteredComment}
          ></input>
          {enteredCommentIsInvalid && (
            <p className="error-text">comment must not be empty</p>
          )}
        </div>
        <div className="post-form">
          <label for="file" className="label-file">
            Image upload
            <input
              type="file"
              id="file"
              onChange={imageUploadHandler}
              className="custom-file-upload"
            />
          </label>
        </div>
        <div className="post-form">
          <Link
            to={{
              pathname: "/",
              state: {
                name: enteredName,
                lastName: enteredLastName,
                teg: enteredPostTag,
                comment: enteredComment,
                image: enteredImage,
                date: new Date(),
              },
            }}
          >
            <button type="submit" className="btn-submit" disabled={!formIsValid}>
              add post
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Create;
