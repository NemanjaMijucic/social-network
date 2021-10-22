import React, {useState} from 'react'

import './App.css';
import './download.png'


function Create() {

  const [enteredName, setEnteredName] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredTags, setEnteredTags] = useState('');
  const [enteredComment, setEnteredComment] = useState('');


  const nameChangeHandler = (event) => {
      setEnteredName(event.target.value);
  }

  const lastNameChangeHandler = (event) => {
      setEnteredLastName(event.target.value)
  }

  const tagsChangeHandler =(event) => {
      setEnteredTags(event)
  }

  const commentChangeHandler = (event) => {
      setEnteredComment(event.target.value);
  }


  return (
    <div className="create">
      <form>
        <div className="post-form">
        <label>Name</label>
        <input type="text" placeholder="name" onChange={nameChangeHandler}></input>
        </div>
        <div className="post-form">
        <label>Last Name</label>
        <input type="text" placeholder="last name" onChange={lastNameChangeHandler}></input>
        </div>
        <div className="post-form">
        <label>Tags</label>
        <input type="text" placeholder="tags" onChange={tagsChangeHandler}></input>
        </div>
        <div className="post-form">
        <label>Comment</label>
        <input type="text" placeholder="comment" onChange={commentChangeHandler}></input>
        </div>
        <div className="post-form">
        <label>Image</label>
        <input type="file" width="80" height="55" />
        </div>
        
     
    
      </form>
    </div>
  );
}

export default Create;
