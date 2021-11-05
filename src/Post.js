import React from "react";
import { useLocation } from "react-router-dom";
import "./Post.css";

const Post = () => {
  const location = useLocation();
  const data = location.state;

 

  return (
    <div className="single-post">
      <div className="single-post-left">
        <p>
          {data.firstName} {data.lastName}
        </p>
        <img src={data.img} alt="" />
      </div>

      <div className="single-post-right">
      <p>{data.date + " " + data.time}</p>
        <p> likes: {data.likes}</p>
        <div>
          {data.tags.map((t) => {
            return <button className="tag_button">{t}</button>;
          })}
        </div>
        <p>{data.comment}</p>
        <form>
          <textarea placeholder="add comment" rows="4" cols="50" />
        </form>
      </div>
    </div>
  );
};

export default Post;
