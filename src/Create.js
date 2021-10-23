import React, {useState} from 'react';
import { Link } from "react-router-dom";

import './App.css';
import './download.png'


function Create() {
  

  const [enteredName, setEnteredName] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredPostTag, setEnteredPostTag] = useState('');
  const [enteredComment, setEnteredComment] = useState('');
  const [enteredImage, setEnteredImage] = useState('')


  const nameChangeHandler = (event) => {
      setEnteredName(event.target.value);
  }

  const lastNameChangeHandler = (event) => {
      setEnteredLastName(event.target.value)
  }

  const tagsChangeHandler =(event) => {
      setEnteredPostTag(event.target.value)
  }

  const commentChangeHandler = (event) => {
      setEnteredComment(event.target.value);
  }

  const imageUploadHandler = (event) => {
    setEnteredImage(event.target.files[0]);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const postData = {
      name: enteredName,
      lastName: enteredLastName,
      teg: enteredPostTag,
      comment: enteredComment,
      image: enteredImage
    }

    console.log(postData);
    setEnteredName('');
    setEnteredLastName('');
    setEnteredPostTag('');
    setEnteredComment('');

  }

  return (
    <div className="create">
      <form onSubmit={submitHandler}>
        <div className="post-form">
        <label htmlFor='name'>Name</label>
        <input type="text" placeholder="name" onChange={nameChangeHandler} value={enteredName}></input>
        </div>
        <div className="post-form">
        <label htmlFor='last name'>Last Name</label>
        <input type="text" placeholder="last name" onChange={lastNameChangeHandler} value={enteredLastName}></input>
        </div>

        <div className="post-form">
        <label htmlFor='tags'>Tags</label>
        <input type="text" placeholder="tags" onChange={tagsChangeHandler} value={enteredPostTag}></input>
        </div>
        <div className="post-form">
        <label htmlFor='comment'>Comment</label>
        <input type="text" placeholder="comment" onChange={commentChangeHandler} value={enteredComment}></input>
        </div>
        <div className="post-form">
        <label htmlFor='file'>Image</label>
        <input type="file" width="80" height="55" name='file' onChange={imageUploadHandler}/>
        </div>
        <div className='post-form'>
      <Link to={
        {pathname: "/",
         state: {
          name: enteredName,
          lastName: enteredLastName,
          teg: enteredPostTag,
          comment: enteredComment,
          image: enteredImage
         }
        }
         
         }>
              <button type='submit' className='btn-submit'>add post</button>
      </Link> 
        </div>
   
    
      </form>
    </div>
  );
}

export default Create;
